!function(a,b,c,d){function g(b,c){this.element=b,this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}function h(a){return(a.filename?a.filename:"Danh sách dữ liệu")+".xls"}var e="table2excel",f={exclude:".noExl",name:"Table2Excel"};g.prototype={init:function(){var b=this,c='<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';b.template={head:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'+c+"<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>",sheet:{head:"<x:ExcelWorksheet><x:Name>",tail:"</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>"},mid:"</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>",table:{head:"<table>",tail:"</table>"},foot:"</body></html>"},b.tableRows=[],a(b.element).each(function(c,d){var e="";a(d).find("tr").not(b.settings.exclude).each(function(b,c){e+="<tr>"+a(c).html()+"</tr>"}),b.tableRows.push(e)}),b.tableToExcel(b.tableRows,b.settings.name,b.settings.sheetName)},tableToExcel:function(d,e,f){var j,k,l,g=this,i="";if(g.uri="data:application/vnd.ms-excel;base64,",g.base64=function(a){return b.btoa(unescape(encodeURIComponent(a)))},g.format=function(a,b){return a.replace(/{(\w+)}/g,function(a,c){return b[c]})},f="undefined"==typeof f?"Sheet":f,g.ctx={worksheet:e||"Worksheet",table:d,sheetName:f},i=g.template.head,a.isArray(d))for(j in d)i+=g.template.sheet.head+f+j+g.template.sheet.tail;if(i+=g.template.mid,a.isArray(d))for(j in d)i+=g.template.table.head+"{table"+j+"}"+g.template.table.tail;i+=g.template.foot;for(j in d)g.ctx["table"+j]=d[j];if(delete g.ctx.table,"undefined"!=typeof msie&&msie>0||navigator.userAgent.match(/Trident.*rv\:11\./))if("undefined"!=typeof Blob){i=[i];var m=new Blob(i,{type:"text/html"});b.navigator.msSaveBlob(m,h(g.settings))}else txtArea1.document.open("text/html","replace"),txtArea1.document.write(g.format(i,g.ctx)),txtArea1.document.close(),txtArea1.focus(),sa=txtArea1.document.execCommand("SaveAs",!0,h(g.settings));else k=g.uri+g.base64(g.format(i,g.ctx)),l=c.createElement("a"),l.download=h(g.settings),l.href=k,c.body.appendChild(l),l.click(),c.body.removeChild(l);return!0}},a.fn[e]=function(b){var c=this;return c.each(function(){a.data(c,"plugin_"+e)||a.data(c,"plugin_"+e,new g(this,b))}),c}}(jQuery,window,document);