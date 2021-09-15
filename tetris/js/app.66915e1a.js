(function(t){function o(o){for(var i,l,a=o[0],e=o[1],h=o[2],y=0,x=[];y<a.length;y++)l=a[y],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&x.push(c[l][0]),c[l]=0;for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);r&&r(o);while(x.length)x.shift()();return n.push.apply(n,h||[]),s()}function s(){for(var t,o=0;o<n.length;o++){for(var s=n[o],i=!0,a=1;a<s.length;a++){var e=s[a];0!==c[e]&&(i=!1)}i&&(n.splice(o--,1),t=l(l.s=s[0]))}return t}var i={},c={app:0},n=[];function l(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,o,s){l.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,o){if(1&o&&(t=l(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)l.d(s,i,function(o){return t[o]}.bind(null,i));return s},l.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(o,"a",o),o},l.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],e=a.push.bind(a);a.push=o,a=a.slice();for(var h=0;h<a.length;h++)o(a[h]);var r=e;n.push([0,"chunk-vendors"]),s()})({0:function(t,o,s){t.exports=s("56d7")},"56d7":function(t,o,s){"use strict";s.r(o);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("7a23"),c={class:"score"},n=Object(i["e"])("div",{class:"title"},"score",-1),l={class:"content"},a={class:"playground"};function e(t,o,s,e,h,r){return Object(i["g"])(),Object(i["d"])(i["a"],null,[Object(i["e"])("h1",{onClick:o[0]||(o[0]=function(){return r.reset_current_block&&r.reset_current_block.apply(r,arguments)})},"Tetris"),Object(i["e"])("div",c,[n,Object(i["e"])("div",l,Object(i["i"])(h.score),1)]),Object(i["e"])("table",a,[(Object(i["g"])(!0),Object(i["d"])(i["a"],null,Object(i["h"])(h.cell_info_arr,(function(t,o){return Object(i["g"])(),Object(i["d"])("tr",{class:"row",key:o},[(Object(i["g"])(!0),Object(i["d"])(i["a"],null,Object(i["h"])(h.cell_info_arr[o],(function(t,s){return Object(i["g"])(),Object(i["d"])("td",{class:Object(i["f"])(["col",{skyblue_block:h.current_block.is_current_block(o,s)&&0==h.current_block.block_type||t.blocked&&0==t.block_type,blue_block:h.current_block.is_current_block(o,s)&&1==h.current_block.block_type||t.blocked&&1==t.block_type,orange_block:h.current_block.is_current_block(o,s)&&2==h.current_block.block_type||t.blocked&&2==t.block_type,yellow_block:h.current_block.is_current_block(o,s)&&3==h.current_block.block_type||t.blocked&&3==t.block_type,green_block:h.current_block.is_current_block(o,s)&&4==h.current_block.block_type||t.blocked&&4==t.block_type,pupple_block:h.current_block.is_current_block(o,s)&&5==h.current_block.block_type||t.blocked&&5==t.block_type,red_block:h.current_block.is_current_block(o,s)&&6==h.current_block.block_type||t.blocked&&6==t.block_type}]),key:s},null,2)})),128))])})),128))]),h.game_in_process?Object(i["c"])("",!0):(Object(i["g"])(),Object(i["d"])("button",{key:0,onClick:o[1]||(o[1]=function(){return r.game_start&&r.game_start.apply(r,arguments)})},"Game Start"))],64)}var h=s("b85c"),r=s("d4ec"),y=s("bee2"),x=(s("a434"),{name:"App",data:function(){return{current_block_creator:function(){function t(){switch(Object(r["a"])(this,t),this.rotation_state=0,this.block_type=this.getRandomInt(0,7),this.block_type){case 0:this.locations=[{x:3,y:0},{x:4,y:0},{x:5,y:0},{x:6,y:0}];break;case 1:this.locations=[{x:3,y:0},{x:4,y:0},{x:5,y:0},{x:5,y:1}];break;case 2:this.locations=[{x:3,y:0},{x:3,y:1},{x:4,y:0},{x:5,y:0}];break;case 3:this.locations=[{x:3,y:0},{x:3,y:1},{x:4,y:0},{x:4,y:1}];break;case 4:this.locations=[{x:3,y:1},{x:4,y:0},{x:4,y:1},{x:5,y:0}];break;case 5:this.locations=[{x:3,y:1},{x:4,y:0},{x:4,y:1},{x:5,y:1}];break;case 6:this.locations=[{x:3,y:0},{x:4,y:0},{x:4,y:1},{x:5,y:1}];break;default:alert("난수 생성 오류!")}}return Object(y["a"])(t,[{key:"getRandomInt",value:function(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t))+t}},{key:"move_left",value:function(t){!(0<this.locations[0].x&&0<this.locations[1].x&&0<this.locations[2].x&&0<this.locations[3].x)||t[this.locations[0].y][this.locations[0].x-1].blocked||t[this.locations[1].y][this.locations[1].x-1].blocked||t[this.locations[2].y][this.locations[2].x-1].blocked||t[this.locations[3].y][this.locations[3].x-1].blocked||(this.locations[0].x--,this.locations[1].x--,this.locations[2].x--,this.locations[3].x--)}},{key:"move_right",value:function(t){!(this.locations[0].x<9&&this.locations[1].x<9&&this.locations[2].x<9&&this.locations[3].x<9)||t[this.locations[0].y][this.locations[0].x+1].blocked||t[this.locations[1].y][this.locations[1].x+1].blocked||t[this.locations[2].y][this.locations[2].x+1].blocked||t[this.locations[3].y][this.locations[3].x+1].blocked||(this.locations[0].x++,this.locations[1].x++,this.locations[2].x++,this.locations[3].x++)}},{key:"move_down",value:function(t){return 19==this.locations[0].y||19==this.locations[1].y||19==this.locations[2].y||19==this.locations[3].y?(t.block_embedding(),t.reset_current_block(),!1):(this.locations[0].y++,this.locations[1].y++,this.locations[2].y++,this.locations[3].y++,!(t.cell_info_arr[this.locations[0].y][this.locations[0].x].blocked||t.cell_info_arr[this.locations[1].y][this.locations[1].x].blocked||t.cell_info_arr[this.locations[2].y][this.locations[2].x].blocked||t.cell_info_arr[this.locations[3].y][this.locations[3].x].blocked)||(this.locations[0].y--,this.locations[1].y--,this.locations[2].y--,this.locations[3].y--,t.block_embedding(),t.reset_current_block(),!1))}},{key:"rotation",value:function(t){this.rotation_state++;var o=this.locations;switch(this.block_type){case 0:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x-2,y:this.locations[0].y},{x:this.locations[1].x-1,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y-2},{x:this.locations[3].x+1,y:this.locations[3].y-3}];break;case 1:this.locations=[{x:this.locations[0].x+2,y:this.locations[0].y},{x:this.locations[1].x+1,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y+2},{x:this.locations[3].x-1,y:this.locations[3].y+3}];break;case 2:this.locations=[{x:this.locations[0].x-2,y:this.locations[0].y},{x:this.locations[1].x-1,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y-2},{x:this.locations[3].x+1,y:this.locations[3].y-3}];break;case 3:this.locations=[{x:this.locations[0].x+2,y:this.locations[0].y},{x:this.locations[1].x+1,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y+2},{x:this.locations[3].x-1,y:this.locations[3].y+3}];break}break;case 1:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x-1,y:this.locations[0].y},{x:this.locations[1].x,y:this.locations[1].y-1},{x:this.locations[2].x+1,y:this.locations[2].y-2},{x:this.locations[3].x,y:this.locations[3].y+1}];break;case 1:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+2},{x:this.locations[1].x,y:this.locations[1].y},{x:this.locations[2].x-1,y:this.locations[2].y+1},{x:this.locations[3].x-1,y:this.locations[3].y+1}];break;case 2:this.locations=[{x:this.locations[0].x,y:this.locations[0].y-2},{x:this.locations[1].x-1,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x+1,y:this.locations[3].y-1}];break;case 3:this.locations=[{x:this.locations[0].x+1,y:this.locations[0].y},{x:this.locations[1].x+1,y:this.locations[1].y},{x:this.locations[2].x,y:this.locations[2].y+1},{x:this.locations[3].x,y:this.locations[3].y-1}];break}break;case 2:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x-1,y:this.locations[0].y},{x:this.locations[1].x-1,y:this.locations[1].y},{x:this.locations[2].x,y:this.locations[2].y-2},{x:this.locations[3].x,y:this.locations[3].y-2}];break;case 1:this.locations=[{x:this.locations[0].x,y:this.locations[0].y},{x:this.locations[1].x+1,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y+1},{x:this.locations[3].x-1,y:this.locations[3].y+2}];break;case 2:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+1},{x:this.locations[1].x,y:this.locations[1].y+1},{x:this.locations[2].x+1,y:this.locations[2].y-1},{x:this.locations[3].x+1,y:this.locations[3].y-1}];break;case 3:this.locations=[{x:this.locations[0].x+1,y:this.locations[0].y-1},{x:this.locations[1].x,y:this.locations[1].y},{x:this.locations[2].x-1,y:this.locations[2].y+2},{x:this.locations[3].x,y:this.locations[3].y+1}];break}break;case 3:break;case 4:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+1},{x:this.locations[1].x+1,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x+1,y:this.locations[3].y-2}];break;case 1:this.locations=[{x:this.locations[0].x,y:this.locations[0].y-1},{x:this.locations[1].x-1,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x-1,y:this.locations[3].y+2}];break;case 2:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+1},{x:this.locations[1].x+1,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x+1,y:this.locations[3].y-2}];break;case 3:this.locations=[{x:this.locations[0].x,y:this.locations[0].y-1},{x:this.locations[1].x-1,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x-1,y:this.locations[3].y+2}];break}break;case 5:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x,y:this.locations[0].y},{x:this.locations[1].x,y:this.locations[1].y},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x+1,y:this.locations[3].y-1}];break;case 1:this.locations=[{x:this.locations[0].x+1,y:this.locations[0].y-1},{x:this.locations[1].x,y:this.locations[1].y+1},{x:this.locations[2].x,y:this.locations[2].y+1},{x:this.locations[3].x,y:this.locations[3].y}];break;case 2:this.locations=[{x:this.locations[0].x-1,y:this.locations[0].y+1},{x:this.locations[1].x,y:this.locations[1].y},{x:this.locations[2].x,y:this.locations[2].y},{x:this.locations[3].x,y:this.locations[3].y}];break;case 3:this.locations=[{x:this.locations[0].x,y:this.locations[0].y},{x:this.locations[1].x,y:this.locations[1].y-1},{x:this.locations[2].x,y:this.locations[2].y-1},{x:this.locations[3].x-1,y:this.locations[3].y+1}];break}break;case 6:switch(this.rotation_state%4){case 0:this.locations=[{x:this.locations[0].x,y:this.locations[0].y-1},{x:this.locations[1].x+1,y:this.locations[1].y-2},{x:this.locations[2].x,y:this.locations[2].y+1},{x:this.locations[3].x+1,y:this.locations[3].y}];break;case 1:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+1},{x:this.locations[1].x-1,y:this.locations[1].y+2},{x:this.locations[2].x,y:this.locations[2].y-1},{x:this.locations[3].x-1,y:this.locations[3].y}];break;case 2:this.locations=[{x:this.locations[0].x,y:this.locations[0].y-1},{x:this.locations[1].x+1,y:this.locations[1].y-2},{x:this.locations[2].x,y:this.locations[2].y+1},{x:this.locations[3].x+1,y:this.locations[3].y}];break;case 3:this.locations=[{x:this.locations[0].x,y:this.locations[0].y+1},{x:this.locations[1].x-1,y:this.locations[1].y+2},{x:this.locations[2].x,y:this.locations[2].y-1},{x:this.locations[3].x-1,y:this.locations[3].y}];break}break}(this.locations[0].x<0||9<this.locations[0].x||19<this.locations[0].y||this.locations[1].x<0||9<this.locations[1].x||19<this.locations[1].y||this.locations[2].x<0||9<this.locations[2].x||19<this.locations[2].y||this.locations[3].x<0||9<this.locations[3].x||19<this.locations[3].y||t[this.locations[0].y][this.locations[0].x].blocked||t[this.locations[1].y][this.locations[1].x].blocked||t[this.locations[2].y][this.locations[2].x].blocked||t[this.locations[3].y][this.locations[3].x].blocked)&&(this.locations=o,this.rotation_state--)}},{key:"press_space_bar",value:function(t){var o=!0;while(o){var s=this.move_down(t);if(!s)break}}},{key:"is_current_block",value:function(t,o){return t==this.locations[0].y&&o==this.locations[0].x||t==this.locations[1].y&&o==this.locations[1].x||t==this.locations[2].y&&o==this.locations[2].x||t==this.locations[3].y&&o==this.locations[3].x}}]),t}(),game_in_process:!1,current_block:null,cell_info_arr:null,score:0,timer:null}},methods:{temp_function:function(){var t=new this.temp_class;console.log(t)},game_start:function(){var t=this;this.game_in_process=!0,this.create_game_board(),this.reset_current_block(),this.timer=setInterval((function(){t.current_block.move_down(t)}),1e3)},game_over:function(){var t,o=Object(h["a"])(this.cell_info_arr[0]);try{for(o.s();!(t=o.n()).done;){var s=t.value;if(s.blocked)return console.log("game over!"),this.game_in_process=!1,clearInterval(this.timer),!0}}catch(i){o.e(i)}finally{o.f()}return!1},create_game_board:function(){for(var t=[],o=0;o<20;o++){for(var s=[],i=0;i<10;i++)s.push({blocked:!1,block_type:null});t.push(s)}this.cell_info_arr=t},supply_new_row:function(){for(var t=[],o=0;o<10;o++)t.push({blocked:!1,block_type:"red_block"});this.cell_info_arr.unshift(t)},reset_current_block:function(){this.current_block=new this.current_block_creator},block_embedding:function(){this.cell_info_arr[this.current_block.locations[0].y][this.current_block.locations[0].x].blocked=!0,this.cell_info_arr[this.current_block.locations[0].y][this.current_block.locations[0].x].block_type=this.current_block.block_type,this.cell_info_arr[this.current_block.locations[1].y][this.current_block.locations[1].x].blocked=!0,this.cell_info_arr[this.current_block.locations[1].y][this.current_block.locations[1].x].block_type=this.current_block.block_type,this.cell_info_arr[this.current_block.locations[2].y][this.current_block.locations[2].x].blocked=!0,this.cell_info_arr[this.current_block.locations[2].y][this.current_block.locations[2].x].block_type=this.current_block.block_type,this.cell_info_arr[this.current_block.locations[3].y][this.current_block.locations[3].x].blocked=!0,this.cell_info_arr[this.current_block.locations[3].y][this.current_block.locations[3].x].block_type=this.current_block.block_type,this.game_over()||this.clear_row()},clear_row:function(){for(var t=0;t<this.cell_info_arr.length;t++){for(var o=!0,s=0;s<this.cell_info_arr[t].length;s++)0==this.cell_info_arr[t][s].blocked&&(o=!1);o&&(this.score+=100,this.cell_info_arr.splice(t,1),this.supply_new_row())}}},mounted:function(){var t=this;window.addEventListener("keydown",(function(o){if(t.game_in_process)switch(o.keyCode){case 32:t.current_block.press_space_bar(t);break;case 37:t.current_block.move_left(t.cell_info_arr);break;case 38:t.current_block.rotation(t.cell_info_arr);break;case 39:t.current_block.move_right(t.cell_info_arr);break;case 40:t.current_block.move_down(t);break}}))}});s("7032");x.render=e;var b=x;Object(i["b"])(b).mount("#app")},7032:function(t,o,s){"use strict";s("a89b")},a89b:function(t,o,s){}});
//# sourceMappingURL=app.66915e1a.js.map