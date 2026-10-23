const h=document.querySelector('header'),m=document.querySelector('.menu'),b=document.querySelector('.burger');
const sc=()=>h.classList.toggle('solid',scrollY>40);sc();addEventListener('scroll',sc);
b.onclick=()=>m.classList.toggle('open');m.addEventListener('click',e=>{if(e.target.tagName=='A')m.classList.remove('open')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('[data-n]').forEach(el=>{const t=+el.dataset.n,io2=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io2.disconnect();let s=null;const f=ts=>{s=s||ts;const p=Math.min((ts-s)/1400,1);el.textContent=Math.floor(t*p).toLocaleString()+(p==1?(el.dataset.s||''):'');p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});io2.observe(el)});
const lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.querySelectorAll('.gal img,.ep img').forEach(i=>i.onclick=()=>{lb.querySelector('img').src=i.src;lb.classList.add('on')});lb.onclick=()=>lb.classList.remove('on');
