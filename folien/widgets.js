(function(){
  var each=function(s,f,r){Array.prototype.forEach.call((r||document).querySelectorAll(s),f)};
  // Erst schätzen, dann auflösen
  each('.schaetz',function(w){
    var r=w.querySelector('input[type=range]'),o=w.querySelector('output'),b=w.querySelector('.aufl'),l=w.querySelector('.loesung');
    var max=+w.dataset.max,von=+w.dataset.von,bis=+w.dataset.bis;
    r.min=w.dataset.min;r.max=max;r.value=w.dataset.start;
    function zeig(){o.textContent=r.value+' %'}
    r.addEventListener('input',zeig);zeig();
    b.addEventListener('click',function(){
      var v=+r.value,d=v<von?von-v:v>bis?v-bis:0;
      var rows=[{l:'Ihre Schätzung',v:v,t:v+' %',a:1}].concat(JSON.parse(w.dataset.balken));
      var h=rows.map(function(x){return '<div class="zeile"><span>'+x.l+'</span><div class="bahn"><i'+(x.a?' class="akzent"':'')+' style="width:'+(x.v/max*100)+'%"></i></div><b>'+x.t+'</b></div>'}).join('');
      var urteil=d===0?'Treffer.':'Sie lagen '+d+' Prozentpunkte '+(v<von?'darunter.':'darüber.');
      l.innerHTML=h+'<p><b>'+urteil+'</b> '+l.querySelector('p').innerHTML+'</p>';
      l.hidden=false;b.disabled=true;r.disabled=true;
    });
  });
  // Sortieren in zwei Klassen
  each('.sortier',function(w){
    var n=0,ok=0,items=w.querySelectorAll('li'),stand=w.querySelector('.stand');
    each('li',function(li){
      var z=document.createElement('div');z.className='wahlzeile';
      var p=document.createElement('p');p.className='rueck';p.hidden=true;
      ['a','b'].forEach(function(k){
        var b=document.createElement('button');b.type='button';b.textContent=w.dataset[k];
        b.addEventListener('click',function(){
          var richtig=li.dataset.r===k;n++;if(richtig)ok++;
          each('button',function(x,i){x.disabled=true;x.className=(['a','b'][i]===li.dataset.r)?'ja':'nein'},z);
          p.innerHTML='<b>'+(richtig?'Richtig.':'Anders: '+w.dataset[li.dataset.r]+'.')+'</b> '+li.dataset.w;p.hidden=false;
          stand.textContent=ok+' von '+n+' richtig'+(n===items.length?'.':' · noch '+(items.length-n));
        });
        z.appendChild(b);
      });
      li.appendChild(z);li.appendChild(p);
    },w);
  });
  // Auswahlknöpfe mit Textfeld
  each('.wahl',function(w){
    var f=w.querySelector('.feld');
    each('.knoepfe button',function(b){
      b.type='button';b.setAttribute('aria-pressed','false');
      b.addEventListener('click',function(){
        each('.knoepfe button',function(x){x.setAttribute('aria-pressed',x===b?'true':'false')},w);
        f.textContent=b.dataset.t;
      });
    },w);
  });
  // Auftrag aus vier Angaben
  each('.bauer',function(w){
    var pre=w.querySelector('pre'),ta=w.querySelectorAll('textarea');
    function bau(){pre.textContent=Array.prototype.map.call(ta,function(t){return t.dataset.k+': '+(t.value.trim()||t.placeholder)}).join('\n')}
    each('textarea',function(t){t.addEventListener('input',bau)},w);bau();
  });
  // Prompt-Gerüst mit zuschaltbaren Zeilen
  each('.geruest',function(w){
    var pre=w.querySelector('pre'),cb=w.querySelectorAll('input[type=checkbox]');
    function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
    function bau(){
      var h=esc(pre.dataset.basis),z=Array.prototype.filter.call(cb,function(c){return c.checked}).map(function(c){return '<mark>- '+esc(c.dataset.z)+'</mark>'});
      pre.innerHTML=h+(z.length?'\nRegeln:\n'+z.join('\n'):'');
    }
    each('input[type=checkbox]',function(c){c.addEventListener('change',bau)},w);bau();
  });
})();
