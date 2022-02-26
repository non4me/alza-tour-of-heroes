"use strict";(self.webpackChunk_alza_toh=self.webpackChunk_alza_toh||[]).push([[374],{374:(Z,l,i)=>{i.r(l),i.d(l,{HeroListModule:()=>O});var s=i(583),c=i(353),u=i(434),e=i(639),g=i(466);function d(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"\u272d"),e.qZA())}const h=function(t){return{selected:t}};let p=(()=>{class t{constructor(){this.selectHero=new e.vpe}onSelect(){this.selectHero.next(!0)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["toh-list-item"]],inputs:{hero:"hero",selected:"selected"},outputs:{selectHero:"selectHero"},decls:7,vars:6,consts:[["type","button",3,"ngClass","click"],[1,"badge"],[1,"name"],[1,"star"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.onSelect()}),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,d,2,0,"span",4),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngClass",e.VKq(4,h,o.selected)),e.xp6(2),e.Oqu(o.hero.id),e.xp6(2),e.Oqu(o.hero.name),e.xp6(2),e.Q6J("ngIf",o.hero.favorite))},directives:[s.mk,s.O5],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{flex:1;cursor:pointer;position:relative;left:0;background-color:#eee;margin:.5em;padding:0;border-radius:4px;display:flex;align-items:stretch;height:1.8em;width:270px;font-size:1.2rem;justify-content:space-between}[_nghost-%COMP%]   button.long-name[_ngcontent-%COMP%]{background:#ffeff2}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#2c3a41;background:#e6e6e6;left:.1em}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active{background:#525252;color:#fafafa}[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%]{background:#98d4dc;color:#fff}[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%]:hover{background:#81bbc2;color:#fff}[_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#405061;line-height:1em;margin-right:.8em;border-radius:4px 0 0 4px}[_nghost-%COMP%]   .name[_ngcontent-%COMP%]{align-self:center;width:90%;text-align:initial;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   .star[_ngcontent-%COMP%]{align-self:center;margin-right:10px}"]}),t})(),f=(()=>{class t{constructor(n,o){this.elementRef=n,this.renderer=o,this.DEFAULT_LIMIT=10}ngAfterViewInit(){const n=this.elementRef.nativeElement,o=n.querySelector("button");n.querySelector(".name").innerText.length>(this.limit||this.DEFAULT_LIMIT)?this.renderer.addClass(o,"long-name"):this.renderer.removeClass(o,"long-name")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(e.Qsj))},t.\u0275dir=e.lG2({type:t,selectors:[["","tohNameLengthLimit",""]],inputs:{limit:["tohNameLengthLimit","limit"]}}),t})();function _(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"li"),e.TgZ(1,"toh-list-item",5),e.NdJ("selectHero",function(){const m=e.CHM(n).$implicit;return e.oxw().setSelected(m)}),e.qZA(),e.qZA()}if(2&t){const n=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("hero",n)("selected",o.isSelected(n))}}const C=function(t,r){return["/",t,r]};function L(t,r){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"h2"),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"div"),e.TgZ(5,"button",1),e._uU(6,"View Details"),e.qZA(),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.hij("",e.lcZ(3,2,null==n.selectedHero?null:n.selectedHero.name)," is my hero"),e.xp6(3),e.Q6J("routerLink",e.WLB(4,C,n.mainRouters.DETAIL,null==n.selectedHero?null:n.selectedHero.id))}}const H=function(t){return["/",t,null]},v=c.Bz.forChild([{path:"",component:(()=>{class t{constructor(n){this.state=n,this.mainRouters=u.D}ngOnInit(){this.heroes=this.state.getHeroList(),this.subscription=this.state.getSelectedHero().subscribe(n=>this.selectedHero=n)}ngOnDestroy(){this.subscription.unsubscribe()}isSelected(n){var o;return n.id===(null===(o=this.selectedHero)||void 0===o?void 0:o.id)}setSelected(n){this.state.setSelectedHero(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:10,vars:5,consts:[[1,"heroes__header"],["type","button",1,"back",3,"routerLink"],[1,"heroes__list"],[4,"ngFor","ngForOf"],[4,"ngIf"],["tohNameLengthLimit","",3,"hero","selected","selectHero"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"h2"),e._uU(3,"My Heroes"),e.qZA(),e.qZA(),e.TgZ(4,"div"),e.TgZ(5,"button",1),e._uU(6,"Create new Hero"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ul",2),e.YNc(8,_,2,2,"li",3),e.qZA(),e.YNc(9,L,7,7,"div",4)),2&n&&(e.xp6(5),e.Q6J("routerLink",e.VKq(3,H,o.mainRouters.DETAIL)),e.xp6(3),e.Q6J("ngForOf",o.heroes),e.xp6(1),e.Q6J("ngIf",o.selectedHero))},directives:[c.rH,s.sg,s.O5,p,f],pipes:[s.gd],styles:[".heroes__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:20px}.heroes__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:lighter;line-height:0}.heroes__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:53px;margin-top:5px}.heroes__list[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.heroes__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}button[_ngcontent-%COMP%]{border-radius:4px;border:none;cursor:pointer;font-size:1rem;padding:5px 10px}"]}),t})()}]);var M=i(368);let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,v,M.m]]}),t})()}}]);