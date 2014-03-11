/*! Unmark Internal - http://unmark.it - 2014-03-11 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};(function(e){unmark.ajax=function(n,a,t,r,i,o){var s=unmark.urlEncode(unmark.vars.csrf_token),i=void 0!==i?i:"json",o=void 0!==o?o:!0,u="csrf_token="+s+"&content_type="+i;t=unmark.empty(t)?u:t+"&"+u,e.ajax({dataType:i,cache:!1,url:n,type:a.toUpperCase(),data:t,async:o,success:function(n){e.isFunction(r)&&r(n)},error:function(n,a,t){var i={error:t,status:a,request:n};e.isFunction(r)&&r(i)}})},unmark.swapClass=function(n,a,t){var r=n;if(-1===a.indexOf("*"))return r.removeClass(a),t?r.addClass(t):r;var i=RegExp("\\s"+a.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return r.each(function(n,a){for(var t=" "+a.className+" ";i.test(t);)t=t.replace(i," ");a.className=e.trim(t)}),t?r.addClass(t):r},unmark.replaceSpecial=function(e){if(void 0!==e&&null!==e){var n=null;for(var a in unmark.special_chars)n=RegExp(a,"gi"),e=e.replace(n,unmark.special_chars[a])}return e},unmark.urlEncode=function(e){return e=unmark.replaceSpecial(e),encodeURIComponent(e)},unmark.empty=function(e){var n=void 0!==e&&null!==e?e.length:0;return e===!1||""===e||null===e||0===e||void 0===e||1>n},unmark.createCookie=function(e,n,a){if(a){var t=new Date;t.setTime(t.getTime()+1e3*60*60*24*a);var r="; expires="+t.toGMTString()}else var r="";document.cookie=e+"="+n+r+"; path=/"},unmark.readCookie=function(e){for(var n=e+"=",a=document.cookie.split(";"),t=0;a.length>t;t++){for(var r=a[t];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return null},unmark.prettyLink=function(e){return e=e.replace(/https?:\/\/(www.)?/,""),"/"===e.substr(-1)&&(e=e.substr(0,e.length-1)),e},unmark.read_query_str=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=RegExp("[\\?&]"+e+"=([^&#]*)"),a=n.exec(location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))},unmark.extendFunction=function(e,n){this[e]=function(e,n,a){return function(){var t=n.apply(e,arguments),r=a.apply(e,arguments);return null!==r?r:t}}(this,this[e],n)}})(window.jQuery),function(e){e(document).ready(function(){function n(e,n){var a=e?"error":"";i.message.removeClass("error").addClass(a).text(n).fadeIn()}function a(e){e?i.submitbtn.find("i").removeClass("icon-go").addClass("icon-spinner"):i.submitbtn.find("i").removeClass("icon-spinner").addClass("icon-go")}function t(){a(!1),i.firstpass.val(""),i.secondpass.val("")}function r(e){unmark.ajax("/tools/resetPassword","post",e,function(e){if(t(),e.success)n(!1,"Your password has been changed. Redirecting now..."),setTimeout(function(){window.location.href="/"},3e3);else{if(e.errors[91]!==void 0)return n(!0,"Invalid Token, Please check your email or contact support.");n(!0,"Password must contain both lower and uppercase letters and at least one number.")}})}var i={};i.helper=e(".gethere"),i.helptrigger=e(".forgot-pass"),i.firstpass=e("#password"),i.secondpass=e("#password2"),i.submitbtn=e(".login-submit"),i.resetform=e("#unmarkReset"),i.message=e(".response-message"),i.helptrigger.on("click",function(e){e.preventDefault(),i.helper.fadeToggle()}),i.firstpass.on("keypress change",function(){i.message.fadeOut()}),i.resetform.on("submit",function(e){e.preventDefault();var o,s=i.firstpass.val(),u=i.secondpass.val(),l=unmark.vars.token;a(!0),s===u?(o="token="+l+"&password="+s,r(o)):(t(),n(!0,"Passwords do not match. Try again."))})})}(window.jQuery),function(e){e(document).ready(function(){function n(n,a){n===!0?s.login_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),s.login_spinner.fadeIn()}):s.login_spinner.fadeOut(400,function(){e(this).hide(),s.login_wrapper.show().animate({top:"0"},500),a&&r(!0,a)})}function a(e){s.login_spinner.fadeOut(400,function(){s.login_success.fadeIn(400,function(){setTimeout(function(){window.location.href=e},800)})})}function t(e){unmark.ajax("/login","post",e,function(e){e.success===!0?a(e.redirect_url):n(!1,e.message)})}function r(e,n){var a=s.pass_wrapper.is(":visible")?s.pass_wrapper:s.login_wrapper,t=e?"error":"";response=a.find(".response-message"),a.find("#password").val(""),response.removeClass("error").addClass(t).text(n).fadeIn()}function i(){s.pass_wrapper.is(":visible")?s.pass_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),n()}):s.login_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),s.pass_wrapper.show().animate({top:"0"},500)})}function o(){var n=e(".login-page-bottom");n.is(":visible")?(n.fadeOut(),s.about_page.fadeOut().delay().fadeIn(800),s.login_page.animate({top:"-130%"},1e3)):(s.about_page.fadeOut(),s.login_page.animate({top:"0"},1e3,function(){n.fadeIn(800)}))}var s={};s.message=e(".response-message"),s.login_wrapper=e(".loginWrapper"),s.login_spinner=e(".unmark-spinner"),s.login_success=e(".unmark-success"),s.login_form=e("#unmarkLogin"),s.pass_form=e("#unmarkForgotPass"),s.forget_submit=e(".forgot-submit"),s.input_fields=e("input.field-input"),s.helper_buttom=e(".forgot-pass"),s.pass_wrapper=e(".forgotPassWrapper"),s.login_page=e("#unmark_login_page"),s.about_page=e("#unmark_about_page"),s.login_form.on("submit",function(a){a.preventDefault(),n(!0);var r=e("#email").val(),i=e("#password").val(),o="email="+unmark.urlEncode(r)+"&password="+unmark.urlEncode(i);setTimeout(function(){t(o)},1500)}),s.pass_form.on("submit",function(n){n.preventDefault(),s.forget_submit.find("i").removeClass("icon-go").addClass("icon-spinner");var a=e("#forgot_email").val(),t="email="+unmark.urlEncode(a);unmark.ajax("/tools/forgotPassword","post",t,function(e){e.success?r(!1,"A confirmation link will be sent via email."):r(!0,"Email not recognized"),s.forget_submit.find("i").removeClass("icon-spinner").addClass("icon-go")})}),s.input_fields.on("change",function(){s.message.slideUp()}),s.pass_form.find("input.field-input").on("keypress change",function(){s.forget_submit.fadeIn(),s.message.slideUp()}),s.helper_buttom.on("click",function(e){e.preventDefault(),i()}),e(".toggle_welcome").on("click",function(e){e.preventDefault(),o()})})}(window.jQuery),function(e){function n(e,n,a){var t=n?"error":"";e.parent().find(".response-message").removeClass("error").addClass(t).text(a).fadeIn()}function a(e,n){var a=e.find(".login-submit i");n?a.removeClass("icon-go").addClass("icon-spinner"):a.removeClass("icon-spinner").addClass("icon-go")}unmark.register_user=function(e){var t,r=e.find("#email").val(),i=e.find("#password").val(),o=e.find("#password2").val();return i!==o?n(e,!0,"The passwords must match."):(a(e,!0),t="email="+unmark.urlEncode(r)+"&password="+unmark.urlEncode(i),unmark.ajax("/register/user","post",t,function(t){t.success?(n(e,!1,"You are now registered, logging you in..."),setTimeout(function(){window.location.href="/"},2500)):(a(e,!1),n(e,!0,t.message))}),void 0)},e(document).ready(function(){e("#register_user").on("submit",function(n){n.preventDefault(),unmark.register_user(e(this))})})}(window.jQuery);