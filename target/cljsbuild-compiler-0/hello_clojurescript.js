// Compiled by ClojureScript 0.0-2156
goog.provide('hello_clojurescript');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
hello_clojurescript.handle_click = (function() { 
var handle_click__delegate = function (argz){return alert(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hello_clojurescript.class$,argz)));
};
var handle_click = function (var_args){
var argz = null;if (arguments.length > 0) {
  argz = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return handle_click__delegate.call(this,argz);};
handle_click.cljs$lang$maxFixedArity = 0;
handle_click.cljs$lang$applyTo = (function (arglist__4745){
var argz = cljs.core.seq(arglist__4745);
return handle_click__delegate(argz);
});
handle_click.cljs$core$IFn$_invoke$arity$variadic = handle_click__delegate;
return handle_click;
})()
;
hello_clojurescript.clickable = document.getElementById("clickable");
hello_clojurescript.clickable.addEventListener("click",hello_clojurescript.handle_click);
