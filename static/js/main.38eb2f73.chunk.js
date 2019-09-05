(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n,o=a(0),i=a.n(o),l=a(22),r=a.n(l),s=(a(31),a(5)),c=a(6),u=a(9),m=a(7),p=a(10),d=a(16),v=a(23),h=function(e){console.log(e.value);var t=e.value,a=t.invoiceNumber,n=t.issueDate,o=t.place,l=t.sellDate;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"containerInvoice"},i.a.createElement("label",{htmlFor:"invoice_number"},"Numer faktury"),i.a.createElement("input",{className:"inputs",id:"invoice_number",type:"text",name:"invoiceNumber",value:a,onChange:e.onChange,readOnly:!0}),i.a.createElement("label",{htmlFor:"invoice_issue_date"},"Data wystawienia"),i.a.createElement("input",{className:"inputs",id:"invoice_issue_date",type:"date",name:"issueDate",value:n,onChange:e.onChange}),i.a.createElement("label",{htmlFor:"invoice_place"},"Miejsce wystawienia"),i.a.createElement("input",{className:"inputs",id:"invoice_place",type:"text",name:"place",value:o,onChange:e.onChange}),i.a.createElement("label",{htmlFor:"invoice_sell_date"},"Data sprzeda\u017cy"),i.a.createElement("input",{className:"inputs",id:"invoice_sell_date",type:"date",name:"sellDate",value:l,onChange:e.onChange})))},y=function(e){var t=e.value,a=t.sellerName,n=t.sellerTaxNo,o=t.sellerStreet,l=t.postcode,r=t.sellerCity;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"dataDivs"},i.a.createElement("label",{htmlFor:"invoice_seller_name",style:{fontWeight:"bold",fontSize:"20px"}},"Sprzedawca"),i.a.createElement("input",{className:"inputs",id:"invoice_seller_name",type:"text",name:"sellerName",value:a,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".sellerNameMessage");a.length>0?e.innerHTML="":e.innerHTML="pole sprzedawcy nie mo\u017ce by\u0107 puste"}}),i.a.createElement("div",{className:"sellerNameMessage"}),i.a.createElement("label",{htmlFor:"invoice_seller_tax_no"},"NIP"),i.a.createElement("input",{className:"inputs",id:"invoice_seller_tax_no",type:"text",name:"sellerTaxNo",value:n,onChange:e.onChange,onBlur:function(){var e=document.getElementById("invoice_seller_tax_no").value,t=document.querySelector(".sellerTaxNoMessage");if((e=(e+="").replace(/[^0-9]+/g,"")).length<10)return t.innerHTML="nieprawid\u0142owa ilo\u015b\u0107 znak\xf3w";if(e.length>10)return t.innerHTML="nieprawid\u0142owa ilo\u015b\u0107 znak\xf3w";var a=0;return a+=6*parseInt(e.charAt(0)),a+=5*parseInt(e.charAt(1)),a+=7*parseInt(e.charAt(2)),a+=2*parseInt(e.charAt(3)),a+=3*parseInt(e.charAt(4)),a+=4*parseInt(e.charAt(5)),a+=5*parseInt(e.charAt(6)),a+=6*parseInt(e.charAt(7)),(a+=7*parseInt(e.charAt(8)))%11===parseInt(e.charAt(9))?t.innerHTML="":t.innerHTML="wpisz prawid\u0142owy nip"}}),i.a.createElement("div",{className:"sellerTaxNoMessage"}),i.a.createElement("label",{htmlFor:"invoice_seller_street"},"Ulica i nr"),i.a.createElement("textarea",{className:"inputs",id:"invoice_seller_street",row:"1",name:"sellerStreet",value:o,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".sellerStreetMessage");o.length>0?e.innerHTML="":e.innerHTML="pole ulica i nr nie mo\u017ce by\u0107 puste"}}),i.a.createElement("div",{className:"sellerStreetMessage"}),i.a.createElement("div",{className:"divPostcodeCity"},i.a.createElement("label",{style:{marginRight:"15px"},htmlFor:"invoice_seller_postcode"},"Kod pocztowy"),i.a.createElement("input",{className:"inputsPostcodeCity",id:"invoice_seller_postcode",type:"text",name:"postcode",value:l,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".sellerPostcodeMessage");l.match(/^\d\d-\d\d\d$/)?e.innerHTML="":e.innerHTML="nieprawid\u0142owy kod"}}),i.a.createElement("label",{style:{marginRight:"15px",marginLeft:"15px"},htmlFor:"invoice_seller_city"},"Miejscowo\u015b\u0107"),i.a.createElement("input",{className:"inputsPostcodeCity",id:"invoice_seller_city",type:"text",name:"sellerCity",value:r,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".sellerCityMessage");r.length>0?e.innerHTML="":e.innerHTML="pole miejscowo\u015b\u0107 nie mo\u017ce by\u0107 puste"}})),i.a.createElement("div",{className:"sellerPostcodeMessage"}),i.a.createElement("div",{className:"sellerCityMessage"})))},b=function(e){var t=e.value,a=t.buyerName,n=t.buyerTaxNo,o=t.buyerStreet,l=t.buyerPostcode,r=t.buyerCity;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"dataDivs"},i.a.createElement("label",{htmlFor:"invoice_buyer_name",style:{fontWeight:"bold",fontSize:"20px"}},"Nabywca"),i.a.createElement("input",{className:"inputs",id:"invoice_buyer_name",type:"text",name:"buyerName",value:a,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".buyerNameMessage");a.length>0?e.innerHTML="":e.innerHTML="pole odbiorcy nie mo\u017ce by\u0107 puste"}}),i.a.createElement("div",{className:"buyerNameMessage"}),i.a.createElement("label",{htmlFor:"invoice_buyer_tax_no"},"NIP"),i.a.createElement("input",{className:"inputs",id:"invoice_buyer_tax_no",type:"text",name:"buyerTaxNo",value:n,onChange:e.onChange,onBlur:function(){var e=document.getElementById("invoice_buyer_tax_no").value,t=document.querySelector(".buyerTaxNoMessage");if((e=(e+="").replace(/[^0-9]+/g,"")).length<10)return t.innerHTML="nieprawid\u0142owa ilo\u015b\u0107 znak\xf3w";if(e.length>10)return t.innerHTML="nieprawid\u0142owa ilo\u015b\u0107 znak\xf3w";var a=0;return a+=6*parseInt(e.charAt(0)),a+=5*parseInt(e.charAt(1)),a+=7*parseInt(e.charAt(2)),a+=2*parseInt(e.charAt(3)),a+=3*parseInt(e.charAt(4)),a+=4*parseInt(e.charAt(5)),a+=5*parseInt(e.charAt(6)),a+=6*parseInt(e.charAt(7)),(a+=7*parseInt(e.charAt(8)))%11===parseInt(e.charAt(9))?t.innerHTML="":t.innerHTML="wpisz prawid\u0142owy nip"}}),i.a.createElement("div",{className:"buyerTaxNoMessage"}),i.a.createElement("label",{htmlFor:"invoice_buyer_street"},"Ulica i nr"),i.a.createElement("textarea",{className:"inputs",id:"invoice_buyer_street",row:"1",name:"buyerStreet",value:o,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".buyerStreetMessage");o.length>0?e.innerHTML="":e.innerHTML="pole ulica i nr nie mo\u017ce by\u0107 puste"}}),i.a.createElement("div",{className:"buyerStreetMessage"}),i.a.createElement("div",{className:"divPostcodeCity"},i.a.createElement("label",{style:{marginRight:"15px"},htmlFor:"invoice_buyer_postcode"},"Kod pocztowy"),i.a.createElement("input",{className:"inputsPostcodeCity",id:"invoice_buyer_postcode",type:"text",name:"buyerPostcode",value:l,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".buyerPostcodeMessage");l.match(/^\d\d-\d\d\d$/)?e.innerHTML="":e.innerHTML="nieprawid\u0142owy kod"}}),i.a.createElement("label",{style:{marginRight:"15px",marginLeft:"15px"},htmlFor:"invoice_buyer_city"},"Miejscowo\u015b\u0107"),i.a.createElement("input",{className:"inputsPostcodeCity",id:"invoice_buyer_city",type:"text",name:"buyerCity",value:r,onChange:e.onChange,onBlur:function(){var e=document.querySelector(".buyerCityMessage");r.length>0?e.innerHTML="":e.innerHTML="pole miejscowo\u015b\u0107 nie mo\u017ce by\u0107 puste"}})),i.a.createElement("div",{className:"buyerPostcodeMessage"}),i.a.createElement("div",{className:"buyerCityMessage"})))},N=function(e){var t=e.value,a=t.list,n=t.totalTax,o=t.totalNet,l=t.totalGross,r=function(){var e=document.querySelector(".positionMessage");a.forEach(function(t){t.positionAttributes.length>0?e.innerHTML="":e.innerHTML="wprowad\u017a nazw\u0119"})},s=function(){var e=document.querySelector(".quantityMessage");a.forEach(function(t){t.positionQuantity.length>0?e.innerHTML="":e.innerHTML="wprowad\u017a ilo\u015b\u0107"})},c=function(){var e=document.querySelector(".unitMessage");a.forEach(function(t){t.positionUnit.length>0?e.innerHTML="":e.innerHTML="wprowad\u017a jednostk\u0119"})},u=function(){var e=document.querySelector(".priceNetMessage");a.forEach(function(t){t.positionPriceNet.length>0?e.innerHTML="":e.innerHTML="wprowad\u017a cen\u0119"})},m=function(){var e=document.querySelector(".taxMessage");a.forEach(function(t){t.positionUnit.length>0?e.innerHTML="":e.innerHTML="wybierz stawk\u0119"})},p=function(e){var t=document.querySelector(".invoicePosition"),a=document.querySelector(".positionDiv");a.positionAttributes===e.positionAttributes&&t.removeChild(a)};return i.a.createElement("form",{className:"invoicePosition",onSubmit:function(e){e.preventDefault()}},a.map(function(t,n){var o="positionAttributes-".concat(n),l="positionQuantity-".concat(n),d="positionUnit-".concat(n),v="positionPriceNet-".concat(n),h="positionTax-".concat(n),y="positionTotalNet-".concat(n),b="positionTotalGross-".concat(n);return i.a.createElement("div",{key:n,className:"positionDiv"},i.a.createElement("label",{htmlFor:o},"".concat(n+1,") Nazwa")),i.a.createElement("input",{type:"text",name:o,id:n,value:a[n].positionAttributes,className:"positionAttributes",onChange:e.onChange,onBlur:r}),i.a.createElement("label",{htmlFor:l},"Ilo\u015b\u0107"),i.a.createElement("input",{type:"number",min:0,name:l,id:n,value:a[n].positionQuantity,className:"positionQuantity",onChange:e.onChange,onBlur:s}),i.a.createElement("label",{htmlFor:d},"Jednostka"),i.a.createElement("input",{type:"text",name:d,id:n,value:a[n].positionUnit,className:"positionUnit",onChange:e.onChange,onBlur:c}),i.a.createElement("label",{htmlFor:v},"Cena netto"),i.a.createElement("input",{type:"number",min:0,name:v,id:n,value:a[n].positionPriceNet,className:"positionPriceNet",onChange:e.onChange,onBlur:u}),i.a.createElement("label",{htmlFor:h},"VAT %"),i.a.createElement("select",{name:h,id:n,value:a[n].positionTax,className:"positionTax",onChange:e.onChange,onBlur:m},i.a.createElement("option",{value:"0"},"--"),i.a.createElement("option",{value:"0.23"},"23"),i.a.createElement("option",{value:"0.08"},"8"),i.a.createElement("option",{value:"0.07"},"7"),i.a.createElement("option",{value:"0.05"},"5"),i.a.createElement("option",{value:"0"},"0")),i.a.createElement("label",{htmlFor:y},"Warto\u015b\u0107 netto"),i.a.createElement("input",{type:"text",name:y,id:n,value:a[n].positionTotalNet,className:"positionTotalNet",onChange:e.onChange}),i.a.createElement("label",{htmlFor:b},"Warto\u015b\u0107 brutto"),i.a.createElement("input",{type:"text",name:b,id:n,value:a[n].positionTotalGross,className:"positionTotalGross",onChange:e.onChange}),i.a.createElement("button",{className:"deletePosition",onClick:p,type:"button"},"X"))}),i.a.createElement("div",{className:"positionMessage"}),i.a.createElement("div",{className:"quantityMessage"}),i.a.createElement("div",{className:"unitMessage"}),i.a.createElement("div",{className:"priceNetMessage"}),i.a.createElement("div",{className:"taxMessage"}),i.a.createElement("button",{onClick:e.addPosition,className:"addPositionBtn"},"Dodaj pozycj\u0119"),i.a.createElement("div",{className:"sumOfInvoice"},i.a.createElement("span",null,"Suma VAT: ",n," "),i.a.createElement("span",null,"Suma netto: ",o," "),i.a.createElement("span",null,"Suma brutto: ",l," ")))},g=a(8),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.props.saveInvoice,className:"saveToBtn"},"Zapisz"),i.a.createElement("button",{className:"invoiceBtn"},i.a.createElement(g.b,{className:"link",to:"/list"},"Lista faktur")))}}]),t}(i.a.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).minDate=(new Date).toISOString().slice(0,10),a.setInvoiceNumber=function(){var e,t=localStorage.getItem("invoices");return"undefined"!==localStorage.getItem("invoices")&&null!==localStorage.getItem("invoices")?(e=JSON.parse(t)[JSON.parse(t).length-1].invoiceNumber.split("/")[0],Number(e)+1+"/"+(new Date).toLocaleDateString().slice(3,10).replace(".","/")):"1/"+(new Date).toLocaleDateString().slice(3,10).replace(".","/")},a.state={invoiceNumber:a.setInvoiceNumber(),issueDate:a.minDate,place:"Warszawa",sellDate:a.minDate,sellerName:"",sellerTaxNo:"",sellerStreet:"",postcode:"",sellerCity:"",buyerName:"",buyerTaxNo:"",buyerStreet:"",buyerPostcode:"",buyerCity:"",list:[{positionAttributes:"",positionQuantity:"",positionUnit:"",positionPriceNet:"",positionTax:"",positionTotalNet:"",positionTotalGross:""}],totalTax:0,totalNet:0,totalGross:0},a.handleInvoiceData=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(v.a)({},n,o))},a.handleInvoicePosition=function(e){if(["positionAttributes","positionQuantity","positionUnit","positionPriceNet","positionTax","positionTotalNet","positionTotalGross"].includes(e.target.className)){var t=Object(d.a)(a.state.list);t[e.target.id][e.target.className]=e.target.value,t[e.target.id].positionTotalNet=t[e.target.id].positionQuantity*t[e.target.id].positionPriceNet,t[e.target.id].positionTotalNet.toFixed(2),t[e.target.id].positionTotalGross=t[e.target.id].positionTotalNet+t[e.target.id].positionTotalNet*t[e.target.id].positionTax,t[e.target.id].positionTotalGross.toFixed(2);var n=0,o=0,i=0;t.forEach(function(e,t){n+=Number(e.positionTax)*Number(e.positionPriceNet),o+=Number(e.positionTotalNet),i+=Number(e.positionTotalGross)}),a.setState({list:t,totalTax:Number(n.toFixed(2)),totalNet:Number(o.toFixed(2)),totalGross:Number(i.toFixed(2))})}},a.handleAddInvoicePosition=function(e){e.preventDefault(),a.setState(function(e){return{list:[].concat(Object(d.a)(e.list),[{positionAttributes:"",positionQuantity:"",positionUnit:"",positionPriceNet:"",positionTax:"",positionTotalNet:"",positionTotalGross:""}])}})},a.handleSaveInvoice=function(e){e.preventDefault();var t=a.state,n=t.invoiceNumber,o=t.issueDate,i=t.place,l=t.sellDate,r=t.sellerName,s=t.sellerTaxNo,c=t.sellerStreet,u=t.postcode,m=t.sellerCity,p=t.buyerName,d=t.buyerTaxNo,v=t.buyerStreet,h=t.buyerPostcode,y=t.buyerCity,b=t.totalTax,N=t.totalNet,g=t.totalGross,E=t.list;n&&o&&i&&l&&r&&s&&c&&u&&m&&p&&d&&v&&h&&y&&b&&N&&g?(E.forEach(function(e,t){""===e.positionAttributes&&""===e.positionQuantity&&""===e.positionUnit&&""===e.positionPriceNet&&""===e.positionTax&&""===e.positionTotalNet&&""===e.positionTotalGross&&E.splice(t,1)}),a.saveToLocalStorage()):alert("wype\u0142nij prawid\u0142owo wszystkie pola")},a.saveToLocalStorage=function(e){var t;t=a.state;var n=localStorage.getItem("invoices");n?((n=JSON.parse(n)).push(t),localStorage.setItem("invoices",JSON.stringify(n))):localStorage.setItem("invoices",JSON.stringify([t])),console.log(t),alert("Faktura zapisana poprawnie"),a.setState({invoiceNumber:a.setInvoiceNumber(),issueDate:a.minDate,place:"",sellDate:a.minDate,sellerName:"",sellerTaxNo:"",sellerStreet:"",postcode:"",sellerCity:"",buyerName:"",buyerTaxNo:"",buyerStreet:"",buyerPostcode:"",buyerCity:"",list:[{positionAttributes:"",positionQuantity:"",positionUnit:"",positionPriceNet:"",positionTax:"",positionTotalNet:"",positionTotalGross:""}],totalTax:0,totalNet:0,totalGross:0})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"1240px",margin:"auto"}},i.a.createElement(h,{value:this.state,onChange:this.handleInvoiceData}),i.a.createElement("div",{className:"sellerBuyerData"},i.a.createElement(y,{value:this.state,onChange:this.handleInvoiceData}),i.a.createElement(b,{value:this.state,onChange:this.handleInvoiceData})),i.a.createElement(N,{value:this.state,onChange:this.handleInvoicePosition,addPosition:this.handleAddInvoicePosition}),i.a.createElement(E,{saveInvoice:this.handleSaveInvoice})))}}]),t}(i.a.Component),T=a(13),w=(a(21),[]),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={invoicesElement:""},a.handleGetInvoices=function(){localStorage.getItem("invoices")&&(n=JSON.parse(localStorage.getItem("invoices")).map(function(e,t){return w.push(e),i.a.createElement("table",{key:t,className:"newInvoice"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,e.invoiceNumber),i.a.createElement("td",null,e.issueDate),i.a.createElement("td",null,e.buyerName),i.a.createElement("td",null,e.buyerTaxNo),i.a.createElement("td",null,e.totalTax),i.a.createElement("td",null,e.totalGross),i.a.createElement("td",null,i.a.createElement("button",{className:"deleteInvoice",onClick:a.deleteInvoice.bind(Object(T.a)(a),e)},"X")))))}),a.setState({invoicesElement:n,invoicesData:w}))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"deleteInvoice",value:function(e){var t=w.findIndex(function(t){return t.invoiceNumber===e.invoiceNumber});n.splice(t,1),w.splice(t,1),this.setState({invoicesElement:n,invoicesData:w},function(){console.log("-- save to localStorage after deleteInvoice --"),localStorage.setItem("invoices",JSON.stringify(w))})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"listOfInvoices"},i.a.createElement("div",{className:"headerDiv"},i.a.createElement("h1",null,"Lista faktur"),i.a.createElement("table",{className:"headerTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Numer"),i.a.createElement("td",null,"Data wystawienia"),i.a.createElement("td",null,"Klient"),i.a.createElement("td",null,"NIP"),i.a.createElement("td",null,"Warto\u015b\u0107 netto"),i.a.createElement("td",null,"Warto\u015b\u0107 brutto"),i.a.createElement("td",null))))),i.a.createElement("div",{className:"listInvoices"},this.state.invoicesElement),i.a.createElement("div",null,i.a.createElement("button",{className:"getListOfInvoiceBtn",onClick:this.handleGetInvoices},"Pobierz liste faktur"),i.a.createElement("button",{className:"invoiceListBtn"},i.a.createElement(g.b,{className:"link",to:"/new"},"Nowa faktura")))))}}]),t}(i.a.Component),x=a(11),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("button",{className:"button"},i.a.createElement(g.b,{className:"link",to:"/new"},"Nowa faktura")),i.a.createElement("button",{className:"button"},i.a.createElement(g.b,{className:"link",to:"/list"},"Lista faktur")))}}]),t}(i.a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(g.a,{basename:"/invoicesapp"},i.a.createElement("div",null,i.a.createElement(x.a,{path:"/",exact:!0,component:S}),i.a.createElement(x.a,{path:"/new",component:f}),i.a.createElement(x.a,{path:"/list",component:C})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.38eb2f73.chunk.js.map