(function(){var e=void 0,g=!0,h=null,k=!1,m,n=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"array"==aa(a)},ba=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},r=function(a){return"string"==typeof a},s=function(a){return"number"==typeof a},t=function(a){return"function"==aa(a)},ca="closure_uid_"+(1E9*Math.random()>>>0),da=0,ea=function(a,b,c){return a.call.apply(a.bind,arguments)},fa=function(a,
b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ga=function(a,b,c){ga=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return ga.apply(h,arguments)},u=function(a,b){function c(){}c.prototype=b.prototype;a.Nb=b.prototype;a.prototype=new c};var x=function(){return n.googletag||(n.googletag={})},y=function(a,b,c){var d=x();if(!(a in d)||c)d[a]=b},ha=function(a,b){a.addEventListener?a.addEventListener("load",b,k):a.attachEvent&&a.attachEvent("onload",b)};var z=function(a,b,c,d,f){this.ga=new Date;this.p=d||h;this.fa=c||h;this.Ja=a;this.Ka=b;this.ea=f||h};m=z.prototype;m.Ua=function(){return this.p};m.Ta=function(){return this.fa};m.Sa=function(){return this.Ja};m.Oa=function(){return this.ga};m.ub=function(){return this.Ka};m.wb=function(){return this.ea};var ia=["Debug","Info","Warning","Error","Fatal"];
z.prototype.toString=function(){var a=this.ga.toTimeString()+": "+ia[this.Ja]+": "+this.Ka;this.ea&&(a+=" Duration: "+(this.ga.getTime()-this.ea.Oa().getTime())+"ms.");return a};z.prototype.getTimestamp=z.prototype.Oa;z.prototype.getService=z.prototype.Ta;z.prototype.getSlot=z.prototype.Ua;z.prototype.getLevel=z.prototype.Sa;z.prototype.getMessage=z.prototype.ub;z.prototype.getReference=z.prototype.wb;var C=function(){this.F=[]};C.prototype.mb=function(){return this.F};C.prototype.rb=function(a){return ja(this,function(b){return b.Ta()===a})};C.prototype.sb=function(a){return ja(this,function(b){return b.Ua()===a})};C.prototype.qb=function(a){return ja(this,function(b){return b.Sa()>=a})};var ja=function(a,b){for(var c=[],d=0;d<a.F.length;++d)b(a.F[d])&&c.push(a.F[d]);return c};C.prototype.log=function(a,b,c,d,f){a=new z(a,b,c,d,f);this.F.push(a);return a};
C.prototype.info=function(a,b,c,d){return this.log(1,a,b,c,d)};var D=function(a,b,c,d){a.log(2,b,c,d,e)};C.prototype.error=function(a,b,c,d){return this.log(3,a,b,c,d)};var F=function(){var a=x();return a.debug_log||(a.debug_log=new C)};y("getEventLog",F);C.prototype.getAllEvents=C.prototype.mb;C.prototype.getEventsByService=C.prototype.rb;C.prototype.getEventsBySlot=C.prototype.sb;C.prototype.getEventsByLevel=C.prototype.qb;var G=function(){this.Pa=this.la=0};G.prototype.push=function(a){for(var b=F(),c=0;c<arguments.length;++c)try{t(arguments[c])&&(arguments[c](),this.la++)}catch(d){this.Pa++,b.error("Exception invoking function: "+d.message)}b.info("Invoked queued function. Total: "+this.la+" Errors: "+this.Pa);return this.la};G.prototype.push=G.prototype.push;(function(){function a(a){this.t={};this.tick=function(a,b,c){this.t[a]=[c!=e?c:(new Date).getTime(),b]};this.tick("start",h,a)}var b=new a;window.GPT_jstiming={Timer:a,load:b};if(window.performance&&window.performance.timing){var b=window.performance.timing,c=window.GPT_jstiming.load,d=b.navigationStart,b=b.responseStart;0<d&&b>=d&&(c.tick("_wtsrt",e,d),c.tick("wtsrt_","_wtsrt",b),c.tick("tbsd_","wtsrt_"))}try{b=h,window.chrome&&window.chrome.csi&&(b=Math.floor(window.chrome.csi().pageT),c&&0<d&&
(c.tick("_tbnd",e,window.chrome.csi().startE),c.tick("tbnd_","_tbnd",d))),b==h&&window.gtbExternal&&(b=window.gtbExternal.pageT()),b==h&&window.external&&(b=window.external.pageT,c&&0<d&&(c.tick("_tbnd",e,window.external.startE),c.tick("tbnd_","_tbnd",d))),b&&(window.GPT_jstiming.pt=b)}catch(f){}})();if(window.GPT_jstiming){window.GPT_jstiming.Ra={};window.GPT_jstiming.ab=1;var ka=function(a,b,c){var d=a.t[b],f=a.t.start;if(d&&(f||c))return d=a.t[b][0],c!=e?f=c:f=f[0],d-f},la=function(a,b,c){var d="";window.GPT_jstiming.pt&&(d+="&srt="+window.GPT_jstiming.pt,delete window.GPT_jstiming.pt);try{window.external&&window.external.tran?d+="&tran="+window.external.tran:window.gtbExternal&&window.gtbExternal.tran?d+="&tran="+window.gtbExternal.tran():window.chrome&&window.chrome.csi&&(d+="&tran="+window.chrome.csi().tran)}catch(f){}var l=
window.chrome;if(l&&(l=l.loadTimes)){l().wasFetchedViaSpdy&&(d+="&p=s");if(l().wasNpnNegotiated){var d=d+"&npn=1",q=l().npnNegotiatedProtocol;q&&(d+="&npnv="+(encodeURIComponent||escape)(q))}l().wasAlternateProtocolAvailable&&(d+="&apa=1")}var A=a.t,B=A.start,l=[],q=[],v;for(v in A)if("start"!=v&&0!=v.indexOf("_")){var w=A[v][1];w?A[w]&&q.push(v+"."+ka(a,v,A[w][0])):B&&l.push(v+"."+ka(a,v))}delete A.start;if(b)for(var E in b)d+="&"+E+"="+b[E];(b=c)||(b="https:"==document.location.protocol?"https://csi.gstatic.com/csi":
"http://csi.gstatic.com/csi");return[b,"?v=3","&s="+(window.GPT_jstiming.sn||"gpt")+"&action=",a.name,q.length?"&it="+q.join(","):"","",d,"&rt=",l.join(",")].join("")},ma=function(a,b,c){a=la(a,b,c);if(!a)return"";b=new Image;var d=window.GPT_jstiming.ab++;window.GPT_jstiming.Ra[d]=b;b.onload=b.onerror=function(){window.GPT_jstiming&&delete window.GPT_jstiming.Ra[d]};b.src=a;b=h;return a};window.GPT_jstiming.report=function(a,b,c){if("prerender"==document.webkitVisibilityState){var d=k,f=function(){if(!d){b?
b.prerender="1":b={prerender:"1"};var l;"prerender"==document.webkitVisibilityState?l=k:(ma(a,b,c),l=g);l&&(d=g,document.removeEventListener("webkitvisibilitychange",f,k))}};document.addEventListener("webkitvisibilitychange",f,k);return""}return ma(a,b,c)}};var H=Array.prototype,na=H.indexOf?function(a,b,c){return H.indexOf.call(a,b,c)}:function(a,b,c){c=c==h?0:0>c?Math.max(0,a.length+c):c;if(r(a))return!r(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=H.forEach?function(a,b,c){H.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=r(a)?a.split(""):a,l=0;l<d;l++)l in f&&b.call(c,f[l],l,a)};var I,pa,J,qa,ra=function(){return n.navigator?n.navigator.userAgent:h};qa=J=pa=I=k;var K;if(K=ra()){var sa=n.navigator;I=0==K.indexOf("Opera");pa=!I&&-1!=K.indexOf("MSIE");J=!I&&-1!=K.indexOf("WebKit");qa=!I&&!J&&"Gecko"==sa.product}var ta=I,L=pa,M=qa,ua=J,va=function(){var a=n.document;return a?a.documentMode:e},wa;
a:{var xa="",N;if(ta&&n.opera)var ya=n.opera.version,xa="function"==typeof ya?ya():ya;else if(M?N=/rv\:([^\);]+)(\)|;)/:L?N=/MSIE\s+([^\);]+)(\)|;)/:ua&&(N=/WebKit\/(\S+)/),N)var za=N.exec(ra()),xa=za?za[1]:"";if(L){var Aa=va();if(Aa>parseFloat(xa)){wa=String(Aa);break a}}wa=xa}
var Ba=wa,Ca={},Da=function(a){if(!Ca[a]){for(var b=0,c=String(Ba).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),l=0;0==b&&l<f;l++){var q=c[l]||"",A=d[l]||"",B=RegExp("(\\d*)(\\D*)","g"),v=RegExp("(\\d*)(\\D*)","g");do{var w=B.exec(q)||["","",""],E=v.exec(A)||["","",""];if(0==w[0].length&&0==E[0].length)break;b=((0==w[1].length?0:parseInt(w[1],10))<(0==E[1].length?0:parseInt(E[1],10))?-1:(0==w[1].length?0:
parseInt(w[1],10))>(0==E[1].length?0:parseInt(E[1],10))?1:0)||((0==w[2].length)<(0==E[2].length)?-1:(0==w[2].length)>(0==E[2].length)?1:0)||(w[2]<E[2]?-1:w[2]>E[2]?1:0)}while(0==b)}Ca[a]=0<=b}},Ea=n.document,Fa=!Ea||!L?e:va()||("CSS1Compat"==Ea.compatMode?parseInt(Ba,10):5);if(M||L){var Ga;if(Ga=L)Ga=L&&9<=Fa;Ga||M&&Da("1.9.1")}L&&Da("9");var O=function(a,b){this.cb=a;this.bb=b};O.prototype.Bb=function(){return this.cb};O.prototype.tb=function(){return this.bb};O.prototype.getWidth=O.prototype.Bb;O.prototype.getHeight=O.prototype.tb;var P=function(a,b,c){this.w=a;this.La=s(b)?b:0;this.g=this.w+"_"+this.La;this.$a=c||"gpt_unit_"+this.g};m=P.prototype;m.o=function(){return this.g};m.getName=function(){return this.w};m.Na=function(){return this.La};m.toString=P.prototype.o;m.l=function(){return this.$a};P.prototype.getId=P.prototype.o;P.prototype.getName=P.prototype.getName;P.prototype.getDomId=P.prototype.l;P.prototype.getInstance=P.prototype.Na;var Ha=function(a){return a.replace(/[^a-zA-Z0-9]/g,function(a){return"&#"+a.charCodeAt()+";"})},Ia=function(){var a=h,b=window,c=h;try{for(;b!=h&&b!==a;){c=b.location.protocol;if("https:"===c)break;else if("http:"===c||"file:"===c)return k;a=b;b=b.parent}}catch(d){}return g};var Q=function(a,b,c,d){this.w=a;var f=[];if(p(c))if(1<c.length&&s(c[0])&&s(c[1]))f.push(new O(c[0],c[1]));else for(var l=0;l<c.length;++l){var q=c[l];p(q)&&(1<q.length&&s(q[0])&&s(q[1]))&&f.push(new O(q[0],q[1]))}this.Wa=f;this.g=new P(a,b,d);this.c=[];this.h={};this.m=h;this.b=F();this.b.info("Created slot: "+this.g,h,this);this.v=this.K=h;this.ya=this.xa="";this.S=g;this.d={};this.V=[];this.za=k};m=Q.prototype;
m.set=function(a,b){var c=[" attribute ",a," with value ",b," for slot ",this.getName()].join("");a&&r(a)&&b?(this.h[a]=b,this.K||this.v?D(this.b,"Setting"+c+" after its contents have been loaded",h,this):this.b.info("Setting"+c,h,this)):D(this.b,"Unable to set"+c,h,this);return this};m.get=function(a){return a in this.h?this.h[a]:h};m.A=function(){var a=[],b;for(b in this.h)t(this.h[b])||a.push(b);return a};
m.da=function(a){for(var b=0;b<this.c.length;++b)if(a==this.c[b])return D(this.b,"Service "+a.getName()+" is already associated with slot "+this.g,a,this),this;this.c.push(a);a.aa(this);return this};m.getName=function(){return this.w};m.i=function(){return this.g};m.xb=function(){return this.c};m.yb=function(){return this.Wa};m.z=function(){return!!document.getElementById(this.g.l())};m.P=function(a){this.m=a};m.D=function(a){this.ya=a;return this};m.X=function(){return this.ya};
m.na=function(a){if(r(a)&&!/^[\s\xa0]*$/.test(a==h?"":String(a))){var b=this.V;0<=na(b,a)||b.push(a);this.b.info("Setting slot level ad category exclusion: "+a,h,this)}else D(this.b,"Invalid slot level ad category exclusion label supplied",h,this);return this};m.ma=function(){this.b.info("Clearing all slot level ad category exclusions",h,this);this.V=[];return this};m.nb=function(){var a;a=this.V;var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];a=c}else a=[];return a};
m.r=function(a,b){var c=[];p(b)?c=b:b&&c.push(b.toString());var d=[" targeting attribute ",a," with value ",c.join()," for slot ",this.getName()].join("");if(a&&r(a)){this.b.info("Setting"+d,h,this);a:{var d=this.d[a],f=c;if(!ba(d)||!ba(f)||d.length!=f.length)d=k;else{for(var l=d.length,q=0;q<l;q++)if(d[q]!==f[q]){d=k;break a}d=g}}this.d[a]=c;if(!d&&(this.K||this.v))for(d=0;d<this.c.length;++d)f=this.c[d],f.isEnabled()&&f.Aa(this,a,c)}else D(this.b,"Unable to set"+d,h,this);return this};
m.eb=function(){this.b.info("Clearing slot targeting.",h,this);var a;a:{for(a in this.d){a=k;break a}a=g}this.d={};if(!a)for(a=0;a<this.c.length;++a){var b=this.c[a];b.isEnabled()&&b.clearSlotTargeting(this)}return this};m.zb=function(){var a=this.d,b={},c;for(c in a)b[c]=a[c];return b};m.vb=function(){return this.za};
var Ja=function(a){if(!a.z())return a.b.error("Unable to write to slot "+a.g+". It has not yet been rendered.",h,a),k;var b=n.document,c=a.g.l(),b=b&&b.getElementById(c);if(!b)return a.b.error("Unable to find the div container with id "+c+" for slot "+a.g,h,a),k;c=a.m;return r(c)&&0<c.length?(a.Ea(),b.innerHTML=c,a.Da(),g):k};m=Q.prototype;m.kb=function(a){this.K=this.b.info("Fetching ad for slot "+this.getName(),h,this);this.xa=a};m.ob=function(){return this.xa};
m.jb=function(){this.b.info("Receiving ad for slot "+this.getName(),h,this,this.K)};m.Ea=function(){this.v=this.b.info("Rendering ad for slot "+this.getName(),h,this)};m.Da=function(){this.b.info("Completed rendering ad for slot "+this.getName(),h,this,this.v)};Q.prototype.set=Q.prototype.set;Q.prototype.get=Q.prototype.get;Q.prototype.getName=Q.prototype.getName;Q.prototype.getSlotId=Q.prototype.i;Q.prototype.getSizes=Q.prototype.yb;Q.prototype.addService=Q.prototype.da;
Q.prototype.getOutOfPage=Q.prototype.vb;Q.prototype.getServices=Q.prototype.xb;Q.prototype.getAttributeKeys=Q.prototype.A;Q.prototype.fetchStarted=Q.prototype.kb;Q.prototype.fetchEnded=Q.prototype.jb;Q.prototype.renderStarted=Q.prototype.Ea;Q.prototype.renderEnded=Q.prototype.Da;Q.prototype.hasWrapperDiv=Q.prototype.z;Q.prototype.getContentUrl=Q.prototype.ob;Q.prototype.setClickUrl=Q.prototype.D;Q.prototype.getClickUrl=Q.prototype.X;Q.prototype.clearTargeting=Q.prototype.eb;
Q.prototype.getTargetingMap=Q.prototype.zb;Q.prototype.setTargeting=Q.prototype.r;Q.prototype.setCategoryExclusion=Q.prototype.na;Q.prototype.clearCategoryExclusions=Q.prototype.ma;Q.prototype.getCategoryExclusions=Q.prototype.nb;var R=function(){this.C={};this.L={};this.b=F()};R.prototype.add=function(a,b,c){if(!r(a)||0>=a.length||!b)return h;a in this.C||(this.C[a]=[]);b=new Q(a,this.C[a].length,b,c);c=b.i().l();if(this.L[c])return this.b.error("Div element "+c+" is already associated with another slot"),h;this.C[a].push(b);return this.L[b.i().l()]=b};R.prototype.find=function(a,b){var c=b||0,d=r(a)&&this.C[a]||[];return 0<=c&&c<d.length&&(d=d[c],d.i().Na()==c)?d:h};
var Ka=function(){var a=x();return a.slot_manager_instance||(a.slot_manager_instance=new R)},La=function(a,b,c){var d=Ka();return d&&d.add(a,b,c)};y("defineOutOfPageSlot",function(a,b){var c=Ka();return!c?h:(c=c.add(a,[1,1],b))?(c.za=g,c):h});y("defineSlot",La);y("defineUnit",La);R.prototype.find=R.prototype.find;R.getInstance=Ka;var Ma=function(a){var b=F();if(r(a)){var c;c=Ka();c.L[a]?c=c.L[a]:(D(c.b,"Ad unit lookup for div "+a+" failed."),c=h);if(c)if(a=c,a.S&&!a.z())D(a.b,"Slot "+a.w+" does not have a container div with id: "+a.g.l()+".",h,a);else for(b=0;b<a.c.length;++b)a.c[b].isEnabled()&&a.c[b].G(a);else b.error("Div "+a+" is not mapped to a known ad unit.")}else b.error("Unknown div id in display(): "+a.toString())};y("display",Ma,g);var S=function(){this.Ha=[];this.Ia={};this.ha=k;this.h={};this.log=F();this.log.info("Created service: "+this.getName(),this)};m=S.prototype;m.getName=function(){return"unknown"};m.getVersion=function(){return"unversioned"};m.set=function(a,b){var c=["attribute ",a," with value ",b," for service ",this.getName()].join("");r(a)&&0<a.length?(this.h[a]=b,this.log.info("Setting "+c,this,h)):D(this.log,"Unable to set "+c,this,h);return this};m.get=function(a){return this.h[a]};
m.A=function(){var a=[],b;for(b in this.h)"function"!=typeof this.h[b]&&a.push(b);return a};m.k=function(){return this.Ha};m.Qa=function(){return this.Ia};m.isEnabled=function(){return this.ha};m.enable=function(){if(this.ha)this.log.info("Service is already enabled.",this);else{this.ha=g;try{this.ka()}catch(a){this.log.error("Failed to enable service: "+a,this)}}};m.display=function(a,b,c,d){this.enable();a=c?La(a,b,c):La(a,b);a.da(this);d&&a.D(d);Ma(a.i().l())};
m.aa=function(a){this.Ha.push(a);this.Ia[a.i().o()]=a;this.log.info("Associated "+this.getName()+" service with slot "+a.getName(),this,a)};m.clearSlotTargeting=function(){};m.Aa=function(){};S.prototype.getSlots=S.prototype.k;S.prototype.getSlotIdMap=S.prototype.Qa;S.prototype.enable=S.prototype.enable;S.prototype.set=S.prototype.set;S.prototype.get=S.prototype.get;S.prototype.getAttributeKeys=S.prototype.A;S.prototype.display=S.prototype.display;var Na=function(a,b){this.name=a;this.ja=b?b:new n.GPT_jstiming.Timer;this.ja.name=a;this.ia=[]};m=Na.prototype;m.getName=function(){return this.name};m.tick=function(a,b){this.ja.tick(a,b)};m.Ma=function(a){a&&this.ia.push(a)};m.report=function(){var a="https:"==n.location.protocol?"https://www.google.com/csi":"http://csi.gstatic.com/csi",b={};this.ia.length&&(b.e=this.ia.join());return n.GPT_jstiming.report(this.ja,b,a)};m.Va=function(a){ha(window,function(){setTimeout(a,10)})};
var T=function(a){this.name=a};u(T,Na);T.prototype.tick=function(){};T.prototype.Ma=function(){};T.prototype.report=function(){return h};T.prototype.Va=function(){};var Oa=function(){var a=n.GPT_jstiming.load,b=0.01;b==e&&(b=0.01);return n.GPT_jstiming&&n.GPT_jstiming.load&&("http:"==n.location.protocol||"https:"==n.location.protocol)&&Math.random()<b?new Na("global",a):new T("global")};
(function(){if(!x()._gpt_timer_&&n.GPT_jstiming){var a=Oa();a.Va(function(){a.tick("load");a.report()});y("_gpt_timer_",a)}return x()._gpt_timer_})();var U=function(){this.c={};this.U=k;this.b=F();this.Ya=this.b.info("Google service JS loaded");ha(window,ga(U.prototype.Za,this))};U.prototype.add=function(a){this.c[a.getName()]=a};U.prototype.find=function(a){var b=h;a in this.c&&(b=this.c[a]);return b};U.prototype.Za=function(){this.U=g;this.b.info("Page load complete",h,h,this.Ya)};var V=function(){var a=x();return a.service_manager_instance||(a.service_manager_instance=new U)};
y("enableServices",function(){var a=V(),b;for(b in a.c){var c=a.c[b];if(!t(c)){c.enable();var c=b,d=x()._gpt_timer_;d&&d.Ma(c)}}});var W=function(){S.call(this);this.Ba=g;this.ca=k;this.N=0;this.O="";this.$=this.Z=this.Y=this.B=e;this.Ca=this.ba=k;this.W={};this.M=k};u(W,S);m=W.prototype;
m.ka=function(){if(this.Ba){if(!this.Ca){var a=document,b=document.createElement("script");b.async=g;b.type="text/javascript";b.src=this.n();try{var c=a.getElementsByTagName("script")[0];this.log.info("Fetching companion ads implementation",this);this.Ca=g;c.parentNode&&c.parentNode.insertBefore(b,c)}catch(d){this.log.error("Unable to fetch companion ads implementation",this)}}}else this.ba||(n.document.write('<script type="text/javascript" src="'+Ha(this.n())+'">\x3c/script>'),this.ba=g)};
m.gb=function(){this.Ba=k};m.Ib=function(a){"boolean"==typeof a&&(this.ca=a)};m.Db=function(a){if(this.ca){for(var b=this.Qa(),c=[],d=0;d<a.length;++d){var f=a[d];f in b?c.push(b[f]):D(this.log,"Cannot find slot with id "+f+".",this)}Pa(this,c)}};m.Fa=function(){var a=googletag.pubads();if(!a.isEnabled())return k;var a=a.k(),b=this.k();if(a.length!=b.length)return k;for(var c=0;c<b.length;++c){for(var d=k,f=0;f<a.length;++f)if(b[c]===a[f]){d=g;break}if(!d)return k}return g};
m.Gb=function(){this.ca&&Pa(this,h)};
m.Kb=function(a,b,c,d,f,l,q){this.M=k;this.N=0;this.O="";this.$=this.Z=this.Y=this.B=e;this.N=a;this.O=b;this.B=c;0==this.B.length&&(this.B=e);a:{a=d.split(",");b=[];for(c=0;c<a.length;++c){d=a[c].split("x");if(2!=d.length){this.log.error("The master ad size specified is invalid.");a=e;break a}d=[Number(d[0]),Number(d[1])];if(isNaN(d[0])||isNaN(d[1])){this.log.error("The master ad size specified is invalid.");a=e;break a}b.push(d)}a=b}this.Y=a;f!==e&&(this.Z=f);l!==e&&(this.$=l);q!==e&&(this.M=q)};
m.pb=function(){return googletag.pubads().getCorrelator()};m.getVideoStreamCorrelator=function(){return googletag.pubads().getVideoStreamCorrelator()};m.Lb=function(a){this.N=a};m.Mb=function(a){this.O=a};
var Pa=function(a,b){var c=googletag.pubads();if(c.isEnabled()){if(a.M){if(!a.Fa()){D(a.log,"Persistent roadblock requested, but ad slots are incorrectly configured. All ad slots on page must have both pubads and companionAds services attached. Skipping refresh.");return}c.clearNoRefreshState();c.clear()}c.Ga(b,a.N,a.O,a.B,a.Y,a.Z,a.$,a.M)}else a.log.error("Pubads service is not enabled, cannot use refresh feature.")};m=W.prototype;
m.isSlotAPersistentRoadblock=function(a){var b=googletag.pubads();if(b.isEnabled())return b.isSlotAPersistentRoadblock(a);this.log.error("Pubads service is not enabled, cannot check whether slot is a persistent roadblock.  Content writing allowed.");return k};m.getName=function(){return"companion_ads"};m.n=function(){var a=document,b=h;try{b=a.location.protocol}catch(c){}return("https:"==b?"https:":"http:")+"//pagead2.googlesyndication.com/pagead/show_companion_ad.js"};
m.Fb=function(){this.log.info("Companion ads implementation fetched.",this);this.ba=g};m.q=function(a){var b=a&&a.i().o();return b&&b in this.W&&a.z()&&this.isEnabled()&&!this.isSlotAPersistentRoadblock(a)?(a.P(this.W[b]),Ja(a)):k};m.G=function(a){this.q(a)};m.fillSlot=function(a,b){return a&&r(b)&&0<b.length?(this.W[a.i().toString()]=b,this.q(a)):k};y("companionAds",function(){var a=V(),b=a.find("companion_ads");b||(b=new W,a.add(b));return b});W.prototype.fillSlot=W.prototype.fillSlot;
W.prototype.enableSyncLoading=W.prototype.gb;W.prototype.isSlotAPersistentRoadblock=W.prototype.isSlotAPersistentRoadblock;W.prototype.isRoadblockingSupported=W.prototype.Fa;W.prototype.onImplementationLoaded=W.prototype.Fb;W.prototype.notifyUnfilledSlots=W.prototype.Db;W.prototype.refreshAllSlots=W.prototype.Gb;W.prototype.setRefreshUnfilledSlots=W.prototype.Ib;W.prototype.setXfpCorrelator=W.prototype.Lb;W.prototype.setXfpPreviousAdsToken=W.prototype.Mb;W.prototype.setVideoSessionInfo=W.prototype.Kb;
W.prototype.getDisplayAdsCorrelator=W.prototype.pb;W.prototype.getVideoStreamCorrelator=W.prototype.getVideoStreamCorrelator;var X=function(){S.call(this);this.m={}};u(X,S);m=X.prototype;m.getName=function(){return"content"};m.q=function(a){var b=a&&a.i().o();return b in this.m&&this.isEnabled()&&a.z()&&!a.v?(a.P(this.m[b]),Ja(a)):k};m.ka=function(){for(var a=this.k(),b=0;b<a.length;++b)this.q(a[b])};m.G=function(a){this.q(a)};m.P=function(a,b){a&&(r(b)&&0<b.length)&&(this.m[a.i().o()]=b,this.q(a))};y("content",function(){var a=V(),b=a.find("content");b||(b=new X,a.add(b));return b});X.prototype.setContent=X.prototype.P;var Qa=h,Ra=M||ua||ta||"function"==typeof n.atob;var Y=function(a,b,c){!r(a)||0>=a.length||!b||!c?F().error("Illegal slot name or size in PassbackSlot(). Name: "+a+"; size: "+b+"; service: "+c):(this.p=new Q(a,this[ca]||(this[ca]=++da),b),this.p.da(c),this.fa=c)};Y.prototype.D=function(a){this.p.D(a);return this};Y.prototype.r=function(a,b){this.p.r(a,b);return this};Y.prototype.display=function(){Sa(this.fa,this.p)};Y.prototype.setClickUrl=Y.prototype.D;Y.prototype.setTargeting=Y.prototype.r;Y.prototype.display=Y.prototype.display;var Z=function(){S.call(this);this.u=k;this.a=h;this.d={};this.R=[];this.ua=this.Q="";this.ta=k;this.ra=g;this.s=this.qa=k;this.f=g;this.I=this.sa=k;this.j=[];this.H=[];this.pa=[];this.T=this.oa=k;this.va=this.wa="";this.J=[]};u(Z,S);
var Ta={adsense_ad_format:"google_ad_format",adsense_ad_types:"google_ad_type",adsense_allow_expandable_ads:"google_allow_expandable_ads",adsense_background_color:"google_color_bg",adsense_bid:"google_bid",adsense_border_color:"google_color_border",adsense_channel_ids:"google_ad_channel",adsense_content_section:"google_ad_section",adsense_cpm:"google_cpm",adsense_ed:"google_ed",adsense_encoding:"google_encoding",adsense_family_safe:"google_safe",adsense_feedback:"google_feedback",adsense_flash_version:"google_flash_version",
adsense_font_face:"google_font_face",adsense_font_size:"google_font_size",adsense_hints:"google_hints",adsense_host:"google_ad_host",adsense_host_channel:"google_ad_host_channel",adsense_host_tier_id:"google_ad_host_tier_id",adsense_keyword_type:"google_kw_type",adsense_keywords:"google_kw",adsense_line_color:"google_line_color",adsense_link_color:"google_color_link",adsense_relevant_content:"google_contents",adsense_reuse_colors:"google_reuse_colors",adsense_targeting:"google_targeting",adsense_targeting_types:"google_targeting",
adsense_test_mode:"google_adtest",adsense_text_color:"google_color_text",adsense_ui_features:"google_ui_features",adsense_ui_version:"google_ui_version",adsense_url_color:"google_color_url",alternate_ad_iframe_color:"google_alternate_color",alternate_ad_url:"google_alternate_ad_url",demographic_age:"google_cust_age",demographic_ch:"google_cust_ch",demographic_gender:"google_cust_gender",demographic_interests:"google_cust_interests",demographic_job:"google_cust_job",demographic_l:"google_cust_l",demographic_lh:"google_cust_lh",
demographic_u_url:"google_cust_u_url",demographic_unique_id:"google_cust_id",document_language:"google_language",geography_override_city:"google_city",geography_override_country:"google_country",geography_override_region:"google_region",page_url:"google_page_url"};
Z.prototype.ka=function(){if(this.f){if(!this.u){var a=document,b=a.createElement("script");V();b.async=g;b.type="text/javascript";b.src=this.n();(a=a.getElementsByTagName("head")[0]||a.getElementsByTagName("body")[0])?(this.log.info("Fetching GPT implementation",this),a.appendChild(b),this.u=g):this.log.error("Unable to fetch GPT implementation",this)}}else Ua(this)};Z.prototype.getName=function(){return"publisher_ads"};Z.prototype.n=function(){return(Ia()?"https:":"http:")+"//partner.googleadservices.com/gampad/google_ads_gpt.js"};
var Ua=function(a){var b=V();!a.u&&!b.U&&(b=document,a.u=g,b.write('<script type="text/javascript" src="'+Ha(a.n())+'">\x3c/script>'))};
Z.prototype.Eb=function(){V();var a=x().impl;if(a&&a.pubads){this.a=a.pubads;this.log.info("GPT implementation fetched.",this);this.ra||this.a.disableFetch();this.I&&this.a.collapseEmptyDivs();if(this.s){this.f?this.a.enableAsyncSingleRequest():this.a.enableSingleRequest();Va(this);for(var a=this.k(),b=0;b<a.length;++b)Wa(this,a[b])}else this.f&&this.a.enableAsyncRendering();this.qa&&this.a.disableInitialLoad();Xa(this);if(0<this.j.length)for(b=0;b<this.j.length;++b)this.G(this.j[b]);if(0<this.H.length)for(b=
0;b<this.H.length;++b)Sa(this,this.H[b]);this.oa?this.refresh():oa(this.pa,this.refresh,this)}else this.log.error("Unable to fetch pubads service implementation from "+this.n(),this)};Z.prototype.aa=function(a){this.f||(a.S=k);S.prototype.aa.call(this,a)};
Z.prototype.G=function(a){if(V().U&&!this.f)this.log.error("Attempting to display ad in sync mode after page load is complete.",this);else if(this.a){if(Va(this),this.s||Wa(this,a))this.log.info("Calling fillslot"),this.a.fillSlot(a)}else if(this.f||this.u&&0==this.j.length){for(var b=k,c=0;c<this.j.length;++c)a===this.j[c]&&(b=g);b||(this.log.info("Delaying rendering of ad slot "+a.getName()+" pending loading of the GPT implementation",this,a),this.j.push(a))}else this.log.error("Skipping rendering of slot "+
a.getName()+" due to missing GPT implementaition",this,a)};
var Wa=function(a,b){if(a.a&&a.a.addSlot(b)==h)return a.log.error("Unable to process name for slot "+b.getName(),a,b),k;for(var c=b.A(),d=0;d<c.length;++d)c[d]in Ta?a.a.addAdSenseSlotAttribute(b,Ta[c[d]],b.get(c[d])):D(a.log,"Ignoring unknown pubads attribute "+c[d]+" with value "+b.get(c[d])+" for slot "+b.getName(),a,b);if(t(a.a.addSlotTargeting)){var c=[],f;for(f in b.d)t(b.d[f])||c.push(f);for(f=0;f<c.length;++f)a.a.addSlotTargeting(b,c[f],c[f]in b.d?b.d[c[f]]:[])}b.X()&&t(a.a.Xa)&&a.a.Xa(b,b.X());
return g},Va=function(a){if(!a.ta){a.ta=g;for(var b=a.A(),c=0;c<b.length;++c)b[c]in Ta?a.a.addAdSensePageAttribute(Ta[b[c]],a.get(b[c])):D(a.log,"Ignoring unknown pubads attribute "+b[c]+" with value "+a.get(b[c]),a);a.a.addAdSensePageAttribute("google_tag_info","v2");for(var d in a.d)if(b=a.d[d],p(b))for(c=0;c<b.length;++c)a.a.addAttribute(d,b[c]);t(a.a.addPageCategoryExclusion)&&oa(a.R,function(a){this.a.addPageCategoryExclusion(a)},a);t(a.a.setPublisherProvidedId)&&a.a.setPublisherProvidedId(a.ua);
a.Q&&a.a.setLocation(a.Q);a.a.setCenterAds!==e&&a.a.setCenterAds(a.sa);a.a.setApiExperiment!==e?oa(a.J,function(a){this.a.setApiExperiment(a)},a):0==a.J.length||D(a.log,"Ignoring forced experiments due to lack of support in the Pubads implementation. Experiments: "+a.J.join())}};m=Z.prototype;
m.r=function(a,b){var c=[];r(b)?c.push(b):c=b;var d=[" targeting attribute ",a," with value ",c.join()," for service ",this.getName()].join("");a&&r(a)?(this.d[a]=c,this.log.info("Setting"+d,this)):D(this.log,"Unable to set"+d,this);return this};m.na=function(a){if(r(a)&&!/^[\s\xa0]*$/.test(a==h?"":String(a))){var b=this.R;0<=na(b,a)||b.push(a);this.log.info("Setting page level ad category exclusion: "+a,this)}else D(this.log,"Invalid page level ad category exclusion label supplied",this);return this};
m.ma=function(){this.log.info("Clearing all page level ad category exclusions",this);this.R=[];return this};m.Cb=function(){this.a?D(this.log,"Ignoring noFetch since the pubads service is already enabled",this):this.ra=k};m.disableInitialLoad=function(){this.a?D(this.log,"Ignoring disableInitialLoad since the pubads service is already enabled",this):this.qa=g};
m.enableSingleRequest=function(){this.isEnabled()&&!this.s?D(this.log,"Ignoring change to single request mode since the service is already enabled",this):(this.log.info("Using single request mode to fetch ads",this),this.s=g);return this.s};m.enableAsyncRendering=function(){this.isEnabled()&&!this.f?D(this.log,"Ignoring change to async-rendering mode since the service is already enabled",this):(this.log.info("Using async-rendering mode to fetch ads",this),this.f=g);return this.f};
m.hb=function(){if(this.isEnabled()&&this.f)D(this.log,"Ignoring change to async-rendering mode since the service is already enabled",this);else{this.log.info("Using sync-rendering mode to fetch ads",this);this.f=k;for(var a=this.k(),b=0;b<a.length;++b)a[b].S=k}return!this.f};m.Hb=function(a){this.log.info("Setting centering to "+a,this);this.sa=a};
m.setPublisherProvidedId=function(a){this.isEnabled()?D(this.log,"Ignoring change to PPID since the service is already enabled. Not setting: "+a,this):(this.log.info("Setting PPID to "+a,this),this.ua=a);return this};m.fb=function(a,b){return new Y(a,b,this)};var Sa=function(a,b){Ua(a);a.a?t(a.a.passback)?a.a.passback(b):a.log.error("The GPT impl does not yet support passbacks.",a,b):(a.log.info("Delaying passback of ad slot "+b.getName()+" pending loading of the GPT implementation",a,b),a.H.push(b))};
m=Z.prototype;
m.refresh=function(a){if(a&&!p(a))D(this.log,"Slots to refresh must be an array.",this);else{var b=h;if(a){for(var b=[],c=0;c<a.length;++c){var d=a[c];d instanceof Q?b.push(d):D(this.log,"Slot object at position "+c+" is of incorrect type.",this)}if(!b.length){this.log.error("No valid slot ids found, refresh aborted.",this);return}}this.a?(this.log.info("Refreshing ads",this),this.a.refresh(b)):(this.log.info("Refresh pushed on pending list until GPT implementation Javascript loads.",this),b?(a=this.pa,
0<=na(a,b)||a.push(b)):this.oa=g)}};
m.Ga=function(a,b,c,d,f,l,q,A){if(a&&!p(a))D(this.log,"Slots to refresh must be an array.",this);else if(b&&!s(b))D(this.log,"Correlator must be a number.",this);else if(c&&!r(c))D(this.log,"Pstok must be a string.",this);else if(d&&!r(d))D(this.log,"Video IU must be a string.",this);else if(f&&!p(f))D(this.log,"Video IU sizes must be an array.",this);else if(l&&!s(l))D(this.log,"Pod number must be a number.",this);else if(q&&!s(q))D(this.log,"Pod position must be a number.",this);else if(A&&"boolean"!=
typeof A)D(this.log,"Persistent roadblocks only must be a boolean.",this);else if(this.a){var B=h;if(a){for(var B=[],v=0;v<a.length;++v){var w=a[v];w instanceof Q?B.push(w):D(this.log,"Slot object at position "+v+" is of incorrect type.",this)}if(!B.length){this.log.error("No valid slot ids found, refresh aborted.",this);return}}if(f)for(v=0;v<f.length;++v){a=f[v];if(!p(a)||2!=a.length){this.log.error("Video size array must have only two values, refresh aborted.",this);return}for(w=0;w<a.length;++w)if(!s(a[w])){this.log.error("Video size array must contain only numbers, refresh aborted.",
this);return}}this.log.info("Refreshing ads",this);this.a.refresh(B,b,c,d,f,l,q,A)}else D(this.log,"The ads cannot be refreshed because the GPT implementation Javascript is not yet loaded.",this)};m.ib=function(){this.T=g;Xa(this)};m.Jb=function(a,b){this.T=g;this.wa=a;this.va=b;Xa(this)};m.Ab=function(){return!this.a||this.a.getVideoContentInformation==h?h:this.a.getVideoContentInformation()};var Xa=function(a){a.T&&(a.a&&a.a.setVideoContentInformation)&&a.a.setVideoContentInformation(a.wa,a.va)};
m=Z.prototype;m.getCorrelator=function(){return 0==this.k().length?"not_available":!this.a?"not_loaded":this.a.getCorrelator==h?"not_available":this.a.getCorrelator()};m.getVideoStreamCorrelator=function(){if(!this.a||this.a.getVideoStreamCorrelator==h)return 0;var a=this.a.getVideoStreamCorrelator();return isNaN(a)?0:a};m.isAdRequestFinished=function(){return!this.a?k:this.a.isAdRequestFinished!=h?this.a.isAdRequestFinished():h};
m.isSlotAPersistentRoadblock=function(a){return this.a&&this.a.isSlotAPersistentRoadblock!=h?this.a.isSlotAPersistentRoadblock(a):k};m.collapseEmptyDivs=function(){this.I?D(this.log,"Ignoring subsequent call to set div collapse mode (already set)",this):this.isEnabled()?D(this.log,"Ignoring change to div collapse mode since the service is already enabled",this):(this.log.info("Enabling collapsing of containers when there is no ad content",this),this.I=g);return this.I};
m.clear=function(){if(!this.a)return D(this.log,"The slot contents cannot be cleared because the GPT implementation Javascript is not yet loaded.",this),k;if(this.a.clearSlotContents!=h)return this.log.info("Clearing slot contents.",this),this.a.clearSlotContents();D(this.log,"The GPT implementation does not yet support clearing slots.");return k};
m.clearNoRefreshState=function(){this.a?this.a.clearNoRefreshState!=h?(this.log.info("Clearing no_refresh state.",this),this.a.clearNoRefreshState()):D(this.log,"The GPT implementation does not yet support clearNoRefreshState"):D(this.log,"The no_refresh state cannot be cleared because the GPT implementation Javascript is not yet loaded.",this)};m.clearSlotTargeting=function(a){this.a&&t(this.a.clearSlotTargeting)&&this.a.clearSlotTargeting(a)};
m.Aa=function(a,b,c){this.a&&t(this.a.addSlotTargeting)&&this.a.addSlotTargeting(a,b,c)};
m.setLocation=function(a,b,c){var d="role:1 producer:12";if(b!==e){if(!s(a)||!s(b))return D(this.log,"Latitude and longitude are expected to be numbers"),this;d+=" latlng{ latitude_e7: "+Math.round(1E7*a)+" longitude_e7: "+Math.round(1E7*b)+"}";if(c!==e){if(isNaN(c))return D(this.log,"Radius is expected to be a number"),this;d+=" radius:"+Math.round(c)}}else 50<a.length&&(b=a.substring(0,50),D(this.log,"Location: "+a+" is longer than 50. Truncating it to"+b+"."),a=b),d+=' loc:"'+a+'"';if(Ra)d=n.btoa(d);
else{a=d;d=[];for(c=b=0;c<a.length;c++){for(var f=a.charCodeAt(c);255<f;)d[b++]=f&255,f>>=8;d[b++]=f}if(!ba(d))throw Error("encodeByteArray takes an array as a parameter");if(!Qa){Qa={};for(a=0;65>a;a++)Qa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)}a=Qa;b=[];for(c=0;c<d.length;c+=3){var l=d[c],q=(f=c+1<d.length)?d[c+1]:0,A=c+2<d.length,B=A?d[c+2]:0,v=l>>2,l=(l&3)<<4|q>>4,q=(q&15)<<2|B>>6,B=B&63;A||(B=64,f||(q=64));b.push(a[v],a[l],a[q],a[B])}d=b.join("")}this.Q=
"a "+d;return this};m.getVersion=function(){return!this.a?e:this.a.getVersion==h?"unversioned":this.a.getVersion()};m.lb=function(a){this.isEnabled()?D(this.log,"Ignoring experiment since the service is already enabled. Not setting: "+a,this):this.J.push(a)};y("pubads",function(){var a=V(),b=a.find("publisher_ads");b||(b=new Z,a.add(b));return b});Z.prototype.clear=Z.prototype.clear;Z.prototype.clearNoRefreshState=Z.prototype.clearNoRefreshState;Z.prototype.collapseEmptyDivs=Z.prototype.collapseEmptyDivs;
Z.prototype.definePassback=Z.prototype.fb;Z.prototype.enableAsyncRendering=Z.prototype.enableAsyncRendering;Z.prototype.enableSingleRequest=Z.prototype.enableSingleRequest;Z.prototype.enableSyncRendering=Z.prototype.hb;Z.prototype.enableVideoAds=Z.prototype.ib;Z.prototype.forceExperiment=Z.prototype.lb;Z.prototype.getCorrelator=Z.prototype.getCorrelator;Z.prototype.getVideoContent=Z.prototype.Ab;Z.prototype.getVideoStreamCorrelator=Z.prototype.getVideoStreamCorrelator;
Z.prototype.isAdRequestFinished=Z.prototype.isAdRequestFinished;Z.prototype.isSlotAPersistentRoadblock=Z.prototype.isSlotAPersistentRoadblock;Z.prototype.noFetch=Z.prototype.Cb;Z.prototype.onGoogleAdsJsLoad=Z.prototype.Eb;Z.prototype.refresh=Z.prototype.refresh;Z.prototype.setLocation=Z.prototype.setLocation;Z.prototype.setTargeting=Z.prototype.r;Z.prototype.setCategoryExclusion=Z.prototype.na;Z.prototype.clearCategoryExclusions=Z.prototype.ma;Z.prototype.setVideoContent=Z.prototype.Jb;
Z.prototype.getVersion=Z.prototype.getVersion;Z.prototype.videoRefresh=Z.prototype.Ga;Z.prototype.setCentering=Z.prototype.Hb;Z.prototype.setPublisherProvidedId=Z.prototype.setPublisherProvidedId;var Ya=/#|$/,Za=function(a,b){var c=a.search(Ya),d;a:{d=0;for(var f=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var l=a.charCodeAt(d-1);if(38==l||63==l)if(l=a.charCodeAt(d+f),!l||61==l||38==l||35==l)break a;d+=f+1}d=-1}if(0>d)return h;f=a.indexOf("&",d);if(0>f||f>c)f=c;d+=b.length+1;return decodeURIComponent(a.substr(d,f-d).replace(/\+/g," "))};var $a=function(){var a=window,b=document;if(x()._pubconsole_disable_)return k;var c;c=document.cookie.split("google_pubconsole=");if(c=2==c.length?c[1].split(";")[0]:"")if(c=c.split("|"),0<c.length&&("1"==c[0]||"0"==c[0]))return g;V();c=k;try{c=a.top.document.URL===b.URL}catch(d){}a=c?b.URL:b.referrer;return Za(a,"google_debug")!==h||Za(a,"google_console")!==h||Za(a,"google_force_console")!==h},ab=function(){if($a()){var a=document,b=a.createElement("script");b.type="text/javascript";b.src=(Ia()?
"https:":"http:")+"//publisherconsole.appspot.com/js/loader.js";b.async=g;(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a)}};"complete"===document.readyState?ab():ha(window,ab);y("disablePublisherConsole",function(){x()._pubconsole_disable_=g});y("getVersion",function(){return"16"});var $=x().cmd;if(!$||p($)){var bb=x().cmd=new G;$&&0<$.length&&bb.push.apply(bb,$)}(function(){var a=document.getElementsByTagName("script");0<a.length&&(a=a[a.length-1],a.src&&(0<=a.src.indexOf("/tag/js/gpt.js")&&a.innerHTML&&!a.googletag_executed)&&(a.googletag_executed=g,eval(a.innerHTML)))})();})()
