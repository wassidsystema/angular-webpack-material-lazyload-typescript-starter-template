!function(e){function t(t){for(var o,r,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)r=c[u],i[r]&&p.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={6:0},i={6:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1,1:1,3:1,4:1,5:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="assets/css/"+({0:"home",1:"recover",3:"lazy-child-two",4:"lazy-child-one",5:"lazy-child"}[e]||e)+"."+{0:"2eea6cb32eafc3b2c8c4",1:"d87aab37e468d618f2c7",3:"ac4c32b133a86d8a1259",4:"131799ce96f568545685",5:"fa7c6c26dcb6a4dbe4df"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=(u=i[a]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===r))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){var u;if((s=(u=l[a]).getAttribute("data-href"))===o||s===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,n(i)},d.href=r,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){r[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+"assets/js/"+({0:"home",1:"recover",3:"lazy-child-two",4:"lazy-child-one",5:"lazy-child"}[e]||e)+"."+{0:"2eea6cb32eafc3b2c8c4",1:"d87aab37e468d618f2c7",3:"ac4c32b133a86d8a1259",4:"131799ce96f568545685",5:"fa7c6c26dcb6a4dbe4df"}[e]+".js"}(e);var l=setTimeout(function(){u({type:"timeout",target:s})},12e4);function u(t){s.onerror=s.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}}s.onerror=s.onload=u,a.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/angular-webpack-material-lazyload-typescript-starter-template",c.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;a.push([211,2]),n()}({210:function(e,t,n){e.exports=n.p+"assets/images/logo.a126baed36a21cb7014146b63baaadfa.png"},211:function(e,t,n){"use strict";n.r(t);n(463),n(462),n(457),n(456),n(455),n(454),n(453),n(452),n(451),n(450),n(449),n(447),n(446),n(445),n(444),n(443),n(441),n(440),n(439),n(438),n(437),n(436),n(435),n(434),n(433),n(432),n(431),n(430),n(426),n(423),n(422),n(421),n(420),n(419),n(418),n(417),n(416),n(415),n(414),n(413),n(412),n(410),n(409),n(408),n(407),n(406),n(404),n(403),n(402),n(401),n(400),n(398),n(397),n(396),n(395),n(394),n(393),n(392),n(391),n(390),n(389),n(106),n(388),n(387),n(386),n(385),n(384),n(383),n(382),n(381),n(380),n(379),n(378),n(377),n(376),n(375),n(374),n(372),n(371),n(370),n(369),n(368),n(367),n(366),n(365),n(364),n(363),n(362),n(361),n(360),n(359),n(358),n(357),n(356),n(355),n(354);var o=n(8),r=(n(352),{controller:function(){return function(){}}(),template:n(349)}),i=n(52);function a(e,t,o,r){e.debugInfoEnabled(!1),r.debugEnabled(!1),o.rules.initial("/login"),o.config.strictMode(!1),t.state("auth",{component:"authComponent"}).state("home.**",{url:"/home",lazyLoad:Object(i.b)(function(){return n.e(0).then(n.bind(null,506))})})}a.$inject=["$compileProvider","$stateProvider","$urlServiceProvider","$logProvider"];var c=a;function s(e){e.init()}s.$inject=["SWService"];var l=s,u=n(209),d=n(208),p=n(207),h=n(206),f=n.n(h),m=n(79);function v(e,t,n){e.theme("default").primaryPalette("blue-grey").accentPalette("blue-grey",{default:"500"}),t.formatDate=function(e){return e?Object(m.format)(e,"DD/MM/YYYY"):""},t.parseDate=function(e){var t=Object(m.parse)(e);return Object(m.isValid)(t)?t:new Date(NaN)},n.html5Mode(!1)}v.$inject=["$mdThemingProvider","$mdDateLocaleProvider","$locationProvider"];var g=v,E=Object(o.module)("app.core",[u,d,f.a,p]).config(g).name,T={build:"https://api.myjson.com",dist:"https://api.myjson.com",distLocal:"https://api.myjson.com"},b=function(){function e(e,t){this.$http=e,this.helperService=t,this.baseURL=T.dist}return e.prototype.get=function(e,t,n){return void 0===t&&(t=this.baseURL),this.$http.get(t+e,n).then(this.helperService.handleSuccessResponse,this.helperService.handleErrorResponse)},e.prototype.post=function(e,t,n){return void 0===n&&(n=this.baseURL),this.$http.post(n+e,t).then(this.helperService.handleSuccessResponse,this.helperService.handleErrorResponse)},e.prototype.put=function(e,t,n,o){return void 0===o&&(o=this.baseURL),this.$http.put(o+e+"/"+t,n).then(this.helperService.handleSuccessResponse,this.helperService.handleErrorResponse)},e.prototype.delete=function(e,t,n){return void 0===n&&(n=this.baseURL),this.$http.delete(n+e+"/"+t).then(this.helperService.handleSuccessResponse,this.helperService.handleErrorResponse)},e.$inject=["$http","HelperService"],e}(),O=function(){function e(e){var t=this;this.messageService=e,this.handleSuccessResponse=function(e){var n;return e&&e.status&&i.a[e.status]&&e.data?n=e.data.d?e.data.d:e.data:t.handleErrorResponse(e),n},this.handleErrorResponse=function(e){t.messageService.alert({title:e.status,subject:e.statusText})}}return e.$inject=["MessageService"],e}(),y=function(){function e(e){this.$mdDialog=e}return e.prototype.alert=function(e){var t=this.$mdDialog.alert().title(e.title).textContent(e.subject).ok(e.okButtonLabel||"Ok");this.$mdDialog.show(t).then(e.afterClosed)},e.prototype.confirm=function(e){var t=this.$mdDialog.confirm().title(e.title).textContent(e.subject).ok(e.okButtonLabel||"Yes").cancel(e.cancelButtonLabel||"No");this.$mdDialog.show(t).then(e.successCallback,e.errorCallback)},e.$inject=["$mdDialog"],e}(),N=n(119),S=function(){function e(e,t){var n=this;this.$window=e,this.messageService=t,this.onUpdating=function(){console.log("Downloading updates.....")},this.onUpdateReady=function(){console.log("Updates available and ready to install"),Object(N.applyUpdate)()},this.onInstalled=function(){console.log("App installed and ready to use. :)")},this.onUpdated=function(){n.messageService.alert({title:"Update Installed",subject:"A new update has been installed, please click OK to reload the application.",afterClosed:function(){return n.$window.location.reload()}}),console.log("App successfully updated.")},this.onUpdateFailed=function(){console.log("App updation failed. :(")}}return e.prototype.init=function(){var e={onInstalled:this.onInstalled,onUpdated:this.onUpdated,onUpdateFailed:this.onUpdateFailed,onUpdateReady:this.onUpdateReady,onUpdating:this.onUpdating};Object(N.install)(e)},e.$inject=["$window","MessageService"],e}(),R=n(505),A=function(){function e(){this.showRequestedSource=new R.a,this.showRequested$=this.showRequestedSource.asObservable()}return e.prototype.show=function(){this.showRequestedSource.next(!0)},e.prototype.hide=function(){this.showRequestedSource.next(!1)},e}(),$=(n(220),{controller:function(){function e(e){var t=this;this.loaderService=e,this.loaderService.showRequested$.subscribe(function(e){return e?t.show():t.hide()})}return e.prototype.$onInit=function(){},e.prototype.show=function(){this.isVisible=!0},e.prototype.hide=function(){this.isVisible=!1},e.$inject=["LoaderService"],e}(),template:n(218)});function I(e){var t=function(t,n,r,i){var a,c=100;return{request:function(e){e.ignoreLoadingBar||s(e)||(a=r(function(){i.show()},c));return e},response:function(e){if(!e||!e.config)return e;return l(),e},responseError:function(e){if(!e||!e.config)return t.reject(e);e.config.ignoreLoadingBar||s(e.config)||l();return t.reject(e)}};function s(t){var r,i=n.get("$http"),a=e.defaults;!t.cache&&!a.cache||!1===t.cache||"GET"!==t.method&&"JSONP"!==t.method||(r=Object(o.isObject)(t.cache)?t.cache:Object(o.isObject)(a.cache)?a.cache:i);var c=void 0!==r&&void 0!==r.get(t.url);return void 0!==t.isCached&&c!==t.isCached?t.isCached:(t.isCached=c,c)}function l(){r.cancel(a),i.hide()}};t.$inject=["$q","$cacheFactory","$timeout","LoaderService"],e.interceptors.push(t)}I.$inject=["$httpProvider"];var _=I;function D(e,t){e.onStart({},function(){return t.show()}),e.onSuccess({},function(){return t.hide()}),e.onError({},function(){return t.hide()})}D.$inject=["$transitions","LoaderService"];var w=D,U=Object(o.module)("loader",[]).service("LoaderService",A).component("loader",$).config(_).run(w).name,j=Object(o.module)("app.shared",[U]).service("DataService",b).service("HelperService",O).service("MessageService",y).service("SWService",S).name,C=function(){function e(e,t){this.dataService=e,this.$cookie=t}return e.prototype.get=function(){return JSON.parse(this.$cookie.get("userId"))},e.prototype.logIn=function(e){var t=this;return this.dataService.post("/bins",e).then(function(e){return t.$cookie.put("userId",JSON.stringify(e)),!0})},e.prototype.logOut=function(){var e=this;return this.dataService.post("/bins",this.get()).then(function(){return e.$cookie.remove("userId"),!0})},e.prototype.recover=function(e){var t=this;return this.dataService.post("/bins",e).then(function(e){return t.$cookie.put("userId",JSON.stringify(e)),!0})},e.prototype.isAuthenticated=function(){return Promise.resolve(!0)},e.$inject=["DataService","$cookies"],e}(),P=(n(217),{controller:function(){function e(e,t,n){this.$element=e,this.$state=t,this.authService=n}return e.prototype.$onInit=function(){this.$element.addClass("layout-column flex"),this.version="v2.0.0"},e.prototype.logIn=function(e){var t=this;this.authService.logIn(e).then(function(e){e&&t.$state.go("home",{},{custom:{ignoreAuthentication:!0}})})},e.prototype.recover=function(e){var t=this;this.authService.recover(e).then(function(e){e&&t.$state.go("login",{},{custom:{ignoreAuthentication:!0}})})},e.$inject=["$element","$state","AuthService"],e}(),template:n(215)});function L(e){e.state("login",{parent:"auth",component:"login",url:"/login"}).state("recover",{lazyLoad:Object(i.b)(function(){return n.e(1).then(n.bind(null,504))}),parent:"auth",component:"recover",url:"/recover"})}L.$inject=["$stateProvider"];var x=L,M=(n(214),{userName:null,password:null}),k={bindings:{onLogIn:"&"},controller:function(){function e(e){this.$element=e}return e.prototype.$onInit=function(){this.$element.addClass("layout-column flex"),this.loginCriteria=Object(o.copy)(M)},e.prototype.onSubmit=function(e){e&&this.onLogIn({loginCriteria:this.loginCriteria})},e.prototype.onCancel=function(e){this.loginCriteria=Object(o.copy)(M),e.$setPristine(),e.$setUntouched()},e.$inject=["$element"],e}(),template:n(212)},F=Object(o.module)("login",[]).component("login",k).name,B=Object(o.module)("app.auth",[F]).service("AuthService",C).component("authComponent",P).config(x).name,V=Object(o.module)("app",[E,j,B]).component("appComponent",r).config(c).run(l).name;Object(o.bootstrap)(document,[V])},212:function(e,t){e.exports='<form name="loginForm" layout="column" layout-align="center center" flex ng-submit="$ctrl.onSubmit(loginForm.$valid)" novalidate> <div flex="30" layout="column" layout-align="center center" class="md-display-2"> <md-icon class="md-whiteframe-1dp login-logo">account_circle</md-icon> </div> <div flex="40" layout="column" layout-align="center center"> <md-input-container> <label>User Name</label> <md-icon aria-label="User Name">assignment_ind</md-icon> <input type="text" name="userName" ng-model="$ctrl.loginCriteria.userName" required> <div ng-messages="loginForm.userName.$error"> <div ng-message="valid">The entered value is not valid</div> <div ng-message="required">Please enter your user name</div> </div> </md-input-container> <md-input-container> <label>Password</label> <md-icon aria-label="Password">lock</md-icon> <input type="password" name="password" ng-model="$ctrl.loginCriteria.password" required> <div ng-messages="loginForm.password.$error"> <div ng-message="valid">The entered value is not valid</div> <div ng-message="required">Please enter your password</div> </div> </md-input-container> </div> <div flex="20" layout="column" layout-align="center center"> <section layout="row" layout-align-xs="center center"> <md-button type="submit" class="md-raised md-primary"> Submit</md-button> <md-button class="md-raised" ng-click="$ctrl.onCancel(loginForm)">Cancel</md-button> </section> </div> <div flex="10" layout="column" layout-align="center center"> <section layout="row" layout-align-xs="center center"> <md-button class="md-primary forgot-button" ui-sref="recover"> <md-icon aria-label="Forgot Password">lock_open</md-icon>Forgot Password</md-button> </section> </div> </form>'},214:function(e,t,n){},215:function(e,t,n){e.exports='<div layout="row" layout-align="center center" flex> <div layout="column" flex-xs="100" flex-sm="50" flex-md="40" flex="25" class="md-whiteframe-3dp main-container" layout-align="center"> <md-toolbar layout="row"> <div class="md-toolbar-tools"> <img class="logo" src="'+n(210)+'" alt="logo"> <span class="md-caption" ng-bind="$ctrl.version"></span> </div> <span flex></span> </md-toolbar> <ui-view layout="column" flex on-log-in="$ctrl.logIn(loginCriteria)" on-recover="$ctrl.recover(recoverCriteria)"/> </div> </div>'},217:function(e,t,n){},218:function(e,t){e.exports='<md-progress-linear md-mode="indeterminate" ng-if="$ctrl.isVisible"></md-progress-linear>'},220:function(e,t,n){},349:function(e,t){e.exports='<loader></loader> <ui-view layout="column" flex/>'},352:function(e,t,n){},52:function(e,t,n){"use strict";function o(e){return function(t){var n=t.injector().get("$injector");return e().then(function(e){return n.loadNewModules([e.default])})}}var r;n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r}),function(e){e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.ACCEPTED=202]="ACCEPTED",e[e.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",e[e.NO_CONTENT=204]="NO_CONTENT",e[e.RESET_CONTENT=205]="RESET_CONTENT",e[e.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",e[e.MULTI_STATUS=207]="MULTI_STATUS",e[e.ALREADY_REPORTED=208]="ALREADY_REPORTED",e[e.TRANSFORMATION_APPLIED=214]="TRANSFORMATION_APPLIED",e[e.IM_USED=226]="IM_USED",e[e.MISCELLANEOUS_PERSISTENT_WARNING=299]="MISCELLANEOUS_PERSISTENT_WARNING",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",e[e.BAD_GATEWAY=502]="BAD_GATEWAY",e[e.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",e[e.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",e[e.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",e[e.VARIANT_ALSO_NEGOTIATES=506]="VARIANT_ALSO_NEGOTIATES",e[e.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",e[e.LOOP_DETECTED=508]="LOOP_DETECTED",e[e.NOT_EXTENDED=510]="NOT_EXTENDED",e[e.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"}(r||(r={}))}});