const CONFIG = {
 business:{mapUrl:'https://www.google.com/maps/search/?api=1&query=La%20Rioja%2038%2C%20C%C3%B3rdoba%20Capital%2C%20Argentina',name:'Muebles Germán',slogan:'Muebles para vivir, espacios para sentir.',phone:'0351 15-241-0823',whatsapp:'5493512410823',email:'',address:'La Rioja 38, Córdoba Capital',hours:'Lunes a viernes de 10 a 17:30 h. Sábados de 10 a 14 h. Domingos cerrado.'},
 whatsappMessage:'Hola, Muebles Germán. Quisiera consultar por sus muebles.',
 hero:{eyebrow:'Diseño para habitar',title:'Un lugar para vivir. Muy tuyo.',subtitle:'Muebles que suman calma, calidez y carácter. Piezas pensadas para acompañar tu forma de estar en casa.',image:'assets/living-german.webp'},
 carouselInterval:2200,
 categories:['Todos','Living','Comedor','Dormitorio','Guardado'],
 products:[
 {id:'sofa-bruma',name:'Sofá Bruma',category:'Living',price:890000,material:'Lino natural · madera maciza',dimensions:'220 × 90 × 78 cm',finish:'Arena',colors:['#c7b8a1','#8e8c7a','#585449'],badge:'Favorito de la casa',description:'Líneas suaves y un asiento profundo para bajar un cambio. Estructura de madera maciza y almohadones desenfundables. Una pieza para conversar, leer y quedarse un rato más.',image:'assets/productos-german.webp', photoPosition:'0% 0%'},
 {id:'mesa-ronda',name:'Mesa Ronda',category:'Comedor',price:425000,material:'Petiribí · terminación mate',dimensions:'120 × 120 × 75 cm',finish:'Madera natural',colors:['#aa7950','#71503c'],badge:'Diseño esencial',description:'Una mesa redonda que invita a compartir. La calidez de la madera y una silueta simple para acompañar las comidas de todos los días.',image:'assets/productos-german.webp', photoPosition:'50% 0%'},
 {id:'sillon-nido',name:'Sillón Nido',category:'Living',price:345000,material:'Tapizado bouclé · base de madera',dimensions:'78 × 82 × 74 cm',finish:'Crudo',colors:['#e0d5c5','#a98872','#727662'],badge:'Nuevo',description:'Tu pausa favorita tiene lugar propio. Respaldo envolvente, textura suave y proporciones compactas para sumar comodidad a ese rincón especial.',image:'assets/productos-german.webp', photoPosition:'100% 0%'},
 {id:'aparador-raiz',name:'Aparador Raíz',category:'Guardado',price:560000,material:'Enchapado de nogal · herrajes ocultos',dimensions:'160 × 42 × 78 cm',finish:'Nogal',colors:['#71503c','#aa7950'],badge:'',description:'Guardá lo cotidiano y dejá a la vista lo que te gusta. Tres puertas, estantes internos y una superficie amplia para tus objetos favoritos.',image:'assets/productos-german.webp', photoPosition:'0% 50%'},
 {id:'mesa-baja-orilla',name:'Mesa baja Orilla',category:'Living',price:215000,material:'Madera de roble · bordes suaves',dimensions:'110 × 60 × 38 cm',finish:'Roble claro',colors:['#bb956c','#71503c'],badge:'',description:'Un punto de encuentro para el living. Su tapa de bordes redondeados y su terminación mate dejan que la textura de la madera sea protagonista.',image:'assets/productos-german.webp', photoPosition:'50% 50%'},
 {id:'cama-calma',name:'Cama Calma',category:'Dormitorio',price:645000,material:'Madera maciza · respaldo de lino',dimensions:'168 × 208 × 110 cm',finish:'Roble y lino arena',colors:['#c7b8a1','#929280'],badge:'Descanso con diseño',description:'Un dormitorio más sereno empieza por una base simple. Estructura firme y respaldo tapizado. Para colchón de 160 × 200 cm, no incluido.',image:'assets/productos-german.webp', photoPosition:'100% 50%'},
 {id:'silla-junco',name:'Silla Junco',category:'Comedor',price:149000,material:'Madera de guatambú · asiento tejido',dimensions:'46 × 52 × 79 cm',finish:'Natural',colors:['#c29b70','#4f473f'],badge:'',description:'Liviana a la vista, cómoda en el uso. Una silla de líneas honestas que combina la calidez de la madera con un asiento de textura artesanal. Precio por unidad.',image:'assets/productos-german.webp', photoPosition:'0% 100%'},
 {id:'mesa-luz-alba',name:'Mesa de luz Alba',category:'Dormitorio',price:128000,material:'Enchapado de roble · cajón oculto',dimensions:'45 × 38 × 52 cm',finish:'Roble claro',colors:['#bb956c','#71503c'],badge:'Pequeños esenciales',description:'Todo lo que necesitás, al alcance. Un cajón para guardar, un espacio abierto y una superficie para tu libro, tu lámpara y tus rituales de cada noche.',image:'assets/productos-german.webp', photoPosition:'50% 100%'},
 {id:'biblioteca-trama',name:'Biblioteca Trama',category:'Guardado',price:398000,material:'Madera de roble · estructura abierta',dimensions:'90 × 32 × 180 cm',finish:'Natural',colors:['#bb956c','#4f473f'],badge:'',description:'Dale lugar a tus libros, recuerdos y plantas. Una biblioteca abierta de cinco niveles que organiza sin recargar el ambiente.',image:'assets/productos-german.webp', photoPosition:'100% 100%'}
 ],
 about:{title:'Lo simple, pensado para vos.',lead:'Una pieza que te gusta, se siente bien y encuentra su lugar. Así entendemos el diseño en Muebles Germán.'},
 specials:{title:'Especiales',lead:'',products:[{id:'sofa-bruma',text:'La calma tiene un lugar. Un sofá amplio, suave y listo para hacerte sentir en casa.'},{id:'sillon-nido',text:'Tu rincón favorito, con una textura que abraza.'},{id:'aparador-raiz',text:'Madera con carácter para guardar lo cotidiano.'}]},
 studio:{action:'Pensemos tu espacio',note:'Diseño cercano, de la primera idea a tu casa.',topics:[{label:'Materiales',title:'La calidez se toca.',text:'Maderas con carácter y tapizados que invitan a quedarse. Te ayudamos a elegir la textura y la terminación según cómo vivís tu casa.',caption:'Texturas que hacen hogar.',scene:'Madera, lino y calma.',message:'Hola, Muebles Germán. Quiero asesoramiento sobre materiales y terminaciones para mi espacio.'},{label:'Medidas',title:'Que encuentre su lugar.',text:'No se trata solo de que entre. También de circular, compartir y estar cómodo. Miramos con vos las medidas, las proporciones y los accesos.',caption:'El espacio también es diseño.',scene:'Tu lugar, a tu manera.',message:'Hola, Muebles Germán. Quiero ayuda para elegir un mueble según las medidas de mi espacio.'},{label:'Entrega',title:'Pensado hasta la llegada.',text:'Una buena elección también merece una entrega clara. Conversamos sobre tu localidad, los accesos y los tiempos antes de avanzar.',caption:'Cerca, en cada detalle.',scene:'De la idea a tu casa.',message:'Hola, Muebles Germán. Quiero consultar las opciones y tiempos de entrega para mi localidad.'}]},
 faqs:[{q:'¿Los muebles están en stock?',a:'Este es un catálogo de ejemplo. En un negocio real, la disponibilidad se confirma por producto al momento de consultar.'},{q:'¿Puedo cambiar medidas o terminaciones?',a:'La propuesta contempla muebles a medida. Consultanos por la pieza que te gusta para evaluar materiales, medidas y factibilidad.'},{q:'¿Cómo se coordinan los envíos?',a:'El costo y los tiempos dependen de la zona y del mueble. Se confirman antes de cerrar la compra. Los datos de este sitio son ficticios.'},{q:'¿Puedo comprar desde el sitio?',a:'El catálogo no tiene carrito ni pagos online. Podés enviar una consulta por WhatsApp con el nombre del producto para continuar la conversación.'}],
 ui:{empty:'No encontramos piezas con esa búsqueda. Probá otro nombre o ambiente.',currency:'ARS',detail:'Ver detalle',consult:'Consultar esta pieza',direct:'Consultar por WhatsApp',darkMode:'Modo oscuro',lightMode:'Modo claro',example:'Precio de ejemplo · confirmar disponibilidad'}
};
const $=s=>document.querySelector(s);
// La versión autónoma conserva las fotos en el HTML, también sin JavaScript.
const bundledPhotos={
 'assets/living-german.webp':document.querySelector('.hero-image')?.getAttribute('src'),
 'assets/productos-german.webp':document.querySelector('.product-photo')?.getAttribute('src')
};
const imageSource=source=>bundledPhotos[source]?.startsWith('data:image/')?bundledPhotos[source]:source;

const escapeHtml=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const searchText=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es');
const price=v=>new Intl.NumberFormat('es-AR',{style:'currency',currency:CONFIG.ui.currency,maximumFractionDigits:0}).format(v);
const whatsapp=message=>`https://wa.me/${CONFIG.business.whatsapp}?text=${encodeURIComponent(message)}`;
function productPhoto(p){
 if(!p.image)return '';
 const position=(p.photoPosition||'0% 0%').match(/\d+/g).map(Number);
 const left=Number.isFinite(position[0])?-2*position[0]:0;
 const top=Number.isFinite(position[1])?-2*position[1]:0;
 return `<img class="product-photo" src="${escapeHtml(imageSource(p.image))}" alt="${escapeHtml(p.name)}: imagen generada de un producto ficticio" width="1254" height="1254" decoding="async" style="left:${left}%;top:${top}%">`;
}
const productLink=p=>whatsapp(`Hola, Muebles Germán. Me interesa ${p.name} (${p.id}). ¿Me cuentan sobre disponibilidad, terminaciones y entrega?`);
document.querySelectorAll('[data-bind]').forEach(el=>{if(el.dataset.bind==='whatsappLink')el.href=whatsapp(CONFIG.whatsappMessage);else el.textContent=el.dataset.bind.split('.').reduce((o,k)=>o?.[k],CONFIG)??'';});
$('.hero-image').src=imageSource(CONFIG.hero.image);
$('#special-title').textContent=CONFIG.specials.title;

$('#special-products').innerHTML=CONFIG.specials.products.map(item=>{const p=CONFIG.products.find(p=>p.id===item.id);if(!p)return '';return `<article class="special-piece"><button class="special-photo product-visual has-photo" data-product="${escapeHtml(p.id)}" aria-label="Conocer ${escapeHtml(p.name)}" aria-controls="product-detail" aria-expanded="false">${productPhoto(p)}</button><div class="special-copy"><p class="special-category">${escapeHtml(p.category)}</p><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(item.text)}</p><span class="special-price">${escapeHtml(price(p.price))}</span><button class="special-discover" data-product="${escapeHtml(p.id)}" aria-controls="product-detail" aria-expanded="false">Conocé esta pieza</button></div></article>`;}).join('');
// One shared scene connects design, materials, proportions and delivery.
const studioTabs=$('#studio-tabs');
studioTabs.innerHTML=CONFIG.studio.topics.map((topic,index)=>`<button type="button" role="tab" id="studio-tab-${index}" aria-controls="studio-panel" aria-selected="${index===0}" tabindex="${index===0?0:-1}" data-studio="${index}">${escapeHtml(topic.label)}</button>`).join('');
function selectStudio(index,focus=false){
 const topic=CONFIG.studio.topics[index];if(!topic)return;
 document.querySelectorAll('[data-studio]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;if(i===index&&focus)button.focus();});
 $('#studio-panel').innerHTML=`<h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.text)}</p>`;
 $('#studio-panel').setAttribute('aria-labelledby',`studio-tab-${index}`);
 $('#studio-caption').textContent=topic.caption;$('#studio-scene-title').textContent=topic.scene;
 $('#nosotros').dataset.scene=String(index);
 $('#studio-note').textContent=CONFIG.studio.note;
}
studioTabs.addEventListener('click',e=>{const button=e.target.closest('[data-studio]');if(button)selectStudio(Number(button.dataset.studio));});
studioTabs.addEventListener('keydown',e=>{const button=e.target.closest('[data-studio]');if(!button)return;const current=Number(button.dataset.studio);let next;if(e.key==='ArrowRight')next=(current+1)%CONFIG.studio.topics.length;else if(e.key==='ArrowLeft')next=(current-1+CONFIG.studio.topics.length)%CONFIG.studio.topics.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=CONFIG.studio.topics.length-1;else return;e.preventDefault();selectStudio(next,true);});
selectStudio(0);
$('#faqs').innerHTML=CONFIG.faqs.map((f,i)=>`<details ${i===0?'open':''}><summary>${escapeHtml(f.q)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(f.a)}</p></details>`).join('');
$('#contact-data').innerHTML=`<div class="contact-address"><dt>Dirección</dt><dd>${escapeHtml(CONFIG.business.address)}<a class="map-link" href="${escapeHtml(CONFIG.business.mapUrl)}" target="_blank" rel="noopener noreferrer">Cómo llegar · Google Maps <span aria-hidden="true">→</span></a></dd></div><div class="contact-hours"><dt>Horarios de atención</dt><dd><span><b>Lunes a viernes</b><span>10:00 a 17:30 h</span></span><span><b>Sábados</b><span>10:00 a 14:00 h</span></span><span><b>Domingos</b><span>Cerrado</span></span></dd></div><div class="contact-phone"><dt>Teléfono</dt><dd><a href="tel:+5493512410823">${escapeHtml(CONFIG.business.phone)}</a></dd></div>`;
$('#copyright').textContent=`(c) ${new Date().getFullYear()} ${CONFIG.business.name}`;
let category='Todos';
$('#filters').innerHTML=CONFIG.categories.map((c,i)=>`<button class="filter ${i===0?'active':''}" aria-pressed="${i===0}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');
function swatches(p){return p.colors.map((c,i)=>`<span class="swatch" style="--swatch:${/^#[a-f\d]{6}$/i.test(c)?c:'#bbb'}" title="Terminación ${i+1}"></span>`).join('');}
function renderProducts(){closeProduct(false);$('#products').scrollLeft=0;const query=searchText($('#search').value.trim());const items=CONFIG.products.filter(p=>(category==='Todos'||p.category===category)&&searchText(`${p.name} ${p.material} ${p.category}`).includes(query));const sort=$('#sort').value;if(sort==='low')items.sort((a,b)=>a.price-b.price);if(sort==='high')items.sort((a,b)=>b.price-a.price);if(sort==='name')items.sort((a,b)=>a.name.localeCompare(b.name,'es'));$('#results').textContent=`${items.length} ${items.length===1?'pieza':'piezas'} para tu casa`;$('#products').innerHTML=items.length?items.map(p=>`<article class="product" style="--card-order:${CONFIG.products.indexOf(p)%3}"><button class="product-visual ${p.image?'has-photo':''} tone-${CONFIG.categories.indexOf(p.category)}" data-product="${escapeHtml(p.id)}" aria-controls="product-detail" aria-expanded="false" aria-label="Ver detalle de ${escapeHtml(p.name)}">${productPhoto(p)}<span class="product-badge">${escapeHtml(p.badge||p.category)}</span><span class="material-display">${escapeHtml(p.material.split(' · ')[0])}</span></button><div class="product-info"><div class="product-category">${escapeHtml(p.category)}<span class="swatches" aria-label="${p.colors.length} terminaciones ilustrativas">${swatches(p)}</span></div><button class="product-name" data-product="${escapeHtml(p.id)}" aria-controls="product-detail" aria-expanded="false">${escapeHtml(p.name)}</button><p class="product-material">${escapeHtml(p.dimensions)} · ${escapeHtml(p.finish)}</p><div class="product-bottom"><span>${escapeHtml(price(p.price))}</span><button class="detail-link" data-product="${escapeHtml(p.id)}" aria-controls="product-detail" aria-expanded="false">${escapeHtml(CONFIG.ui.detail)} <span>→</span></button></div><a class="product-whatsapp" href="${escapeHtml(productLink(p))}" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp sobre ${escapeHtml(p.name)}">${escapeHtml(CONFIG.ui.direct)} <span aria-hidden="true">→</span></a></div></article>`).join(''):`<div class="empty"><p>${escapeHtml(CONFIG.ui.empty)}</p><button class="reset-filters" type="button">Ver todos los muebles</button></div>`;}
$('#filters').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(!button)return;category=button.dataset.category;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProducts();});$('#search').addEventListener('input',renderProducts);$('#sort').addEventListener('change',renderProducts);renderProducts();
let productOpener;
function closeProduct(restoreFocus=true){
 const detail=$('#product-detail');if(!detail)return;
 detail.hidden=true;detail.innerHTML='';
 document.querySelectorAll('[data-product]').forEach(b=>b.setAttribute('aria-expanded','false'));
 if(restoreFocus)productOpener?.focus({preventScroll:true});
}
function openProduct(p,button){
 productOpener=button;
 document.querySelectorAll('[data-product]').forEach(b=>b.setAttribute('aria-expanded',String(b.dataset.product===p.id)));
 const detail=$('#product-detail');
 detail.innerHTML=`<div class="detail-top"><p>Catálogo · ${escapeHtml(p.category)} · ${escapeHtml(p.name)}</p><button class="back-to-catalog" type="button">Volver al catálogo</button></div><div class="detail-layout"><div class="detail-gallery"><div class="detail-main-photo">${productPhoto(p)}</div><p>Imagen generada. Producto y terminaciones ficticios.</p></div><div class="detail-copy"><p class="eyebrow">${escapeHtml(p.category)}</p><h3 id="product-detail-title" tabindex="-1">${escapeHtml(p.name)}</h3><p class="detail-price">${escapeHtml(price(p.price))}</p><p class="detail-price-note">${escapeHtml(CONFIG.ui.example)}</p><p class="availability">Disponibilidad a confirmar</p><p class="detail-description">${escapeHtml(p.description)}</p><dl class="detail-specs"><div><dt>Medidas</dt><dd>${escapeHtml(p.dimensions)}</dd></div><div><dt>Materiales</dt><dd>${escapeHtml(p.material)}</dd></div><div><dt>Terminación de referencia</dt><dd>${escapeHtml(p.finish)}</dd></div></dl><label class="quantity-label" for="inquiry-quantity">Cantidad para consultar</label><div class="quantity"><button type="button" data-quantity="-1" aria-label="Reducir cantidad">−</button><input id="inquiry-quantity" type="number" min="1" max="99" step="1" value="1" inputmode="numeric"><button type="button" data-quantity="1" aria-label="Aumentar cantidad">+</button></div><a class="button detail-inquiry" href="${escapeHtml(productLink(p))}" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a><p class="detail-catalog-note">Esto es un catálogo: tu consulta no genera una compra ni una reserva.</p><details class="delivery-details"><summary>Entrega y personalización<span aria-hidden="true">+</span></summary><p>Consultanos por tu localidad, tiempos de entrega y opciones de medidas o terminaciones. Confirmamos los detalles antes de avanzar.</p></details></div></div>`;
 detail.hidden=false;
 detail.querySelector('.back-to-catalog').addEventListener('click',()=>{closeProduct();$('#catalogo').scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'start'});});
 const quantity=detail.querySelector('#inquiry-quantity');
 function updateInquiry(){const number=Math.max(1,Math.min(99,Math.round(Number(quantity.value)||1)));quantity.value=number;detail.querySelector('.detail-inquiry').href=whatsapp(`Hola, Muebles Germán. Me interesa ${p.name} (${p.id}), cantidad: ${number}. ¿Me cuentan sobre disponibilidad, terminaciones y entrega?`);}
 detail.querySelectorAll('[data-quantity]').forEach(b=>b.addEventListener('click',()=>{quantity.value=(Number(quantity.value)||1)+Number(b.dataset.quantity);updateInquiry();}));quantity.addEventListener('change',updateInquiry);updateInquiry();
 detail.querySelector('#product-detail-title').focus({preventScroll:true});
 detail.scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'start'});
}
function handleProductClick(e){const button=e.target.closest('[data-product]');if(!button)return;const product=CONFIG.products.find(p=>p.id===button.dataset.product);if(product){openProduct(product,button);pauseCarousel();}}
$('#products').addEventListener('click',handleProductClick);$('#special-products').addEventListener('click',handleProductClick);
const menu=$('.menu');function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú');$('#navigation').classList.remove('open');}menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');$('#navigation').classList.toggle('open',open);});$('#navigation').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

// Theme preference stays on this device. Storage may be unavailable for local files.
const themeToggle=$('#theme-toggle');
function applyTheme(theme){document.documentElement.dataset.theme=theme;const dark=theme==='dark';themeToggle.setAttribute('aria-pressed',String(dark));themeToggle.setAttribute('aria-label',dark?'Activar modo claro':'Activar modo oscuro');$('.theme-label').textContent=dark?CONFIG.ui.lightMode:CONFIG.ui.darkMode;}
applyTheme(document.documentElement.dataset.theme||'light');
themeToggle.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(next);try{localStorage.setItem('german-theme',next);}catch{}});
// Keep content visible without JavaScript or when reduced motion is requested.
const motion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){if(!motion.matches)entry.target.classList.add('in-view');observer.unobserve(entry.target);}});},{threshold:.12});document.querySelectorAll('.panel:not(.hero),.manifesto').forEach(section=>observer.observe(section));}
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link=>{link.target='_blank';link.rel='noopener noreferrer';});

// Carousel: pause while reading, focusing, touching, or using another tab.
const track=$('#products');let carouselTimer,touchResume,touchPaused=false;
function pauseCarousel(){clearInterval(carouselTimer);}
function canPlay(){return !motion.matches&&!touchPaused&&!document.hidden&&$('#product-detail').hidden&&!track.matches(':hover')&&!track.contains(document.activeElement)&&track.scrollWidth>track.clientWidth+2;}
function restartCarousel(){pauseCarousel();if(canPlay())carouselTimer=setInterval(()=>{if(canPlay())moveCarousel(1,false);else pauseCarousel();},CONFIG.carouselInterval);}
function moveCarousel(direction,manual=true){const first=track.querySelector('.product');if(!first)return;const step=first.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||0);const max=track.scrollWidth-track.clientWidth;const next=direction>0?(track.scrollLeft>=max-3?0:Math.min(max,track.scrollLeft+step)):(track.scrollLeft<=3?max:Math.max(0,track.scrollLeft-step));track.scrollTo({left:next,behavior:motion.matches?'instant':'smooth'});if(manual)restartCarousel();}
track.addEventListener('mouseenter',pauseCarousel);track.addEventListener('mouseleave',restartCarousel);track.addEventListener('focusin',pauseCarousel);track.addEventListener('focusout',()=>setTimeout(restartCarousel,0));
track.addEventListener('keydown',e=>{if(e.target===track&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();moveCarousel(e.key==='ArrowRight'?1:-1);}});
track.addEventListener('touchstart',()=>{clearTimeout(touchResume);touchPaused=true;pauseCarousel();},{passive:true});function resumeTouch(){touchResume=setTimeout(()=>{touchPaused=false;restartCarousel();},2000);}track.addEventListener('touchend',resumeTouch);track.addEventListener('touchcancel',resumeTouch);
motion.addEventListener('change',restartCarousel);document.addEventListener('visibilitychange',restartCarousel);window.addEventListener('resize',restartCarousel);
$('#filters').addEventListener('click',restartCarousel);$('#search').addEventListener('input',restartCarousel);$('#sort').addEventListener('change',restartCarousel);
$('#products').addEventListener('click',e=>{if(e.target.closest('[data-product]'))pauseCarousel();});$('#product-detail').addEventListener('click',e=>{if(e.target.closest('.back-to-catalog'))restartCarousel();});restartCarousel();

// Recover from an empty search without losing the visitor's place.
$('#products').addEventListener('click',e=>{if(!e.target.closest('.reset-filters'))return;category='Todos';$('#search').value='';$('#sort').value='featured';document.querySelectorAll('.filter').forEach(button=>{const selected=button.dataset.category===category;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});renderProducts();restartCarousel();$('#search').focus({preventScroll:true});});
let rangeFrame;
function updateVisibleRange(){cancelAnimationFrame(rangeFrame);rangeFrame=requestAnimationFrame(()=>{const items=[...track.querySelectorAll('.product')];const range=$('#catalog-range');if(!items.length){range.textContent='';return;}const rect=track.getBoundingClientRect();const visible=items.map((item,index)=>({index,rect:item.getBoundingClientRect()})).filter(item=>item.rect.right>rect.left+15&&item.rect.left<rect.right-15);if(visible.length)range.textContent=`${String(visible[0].index+1).padStart(2,'0')} — ${String(visible[visible.length-1].index+1).padStart(2,'0')} de ${String(items.length).padStart(2,'0')}`;});}
track.addEventListener('scroll',updateVisibleRange,{passive:true});window.addEventListener('resize',updateVisibleRange);new MutationObserver(updateVisibleRange).observe(track,{childList:true});updateVisibleRange();
// Pause automatically on keyboard focus, hover and touch; no extra controls.
track.setAttribute('aria-description','El carrusel avanza automáticamente. Se detiene al pasar el puntero, al tocarlo o al enfocar un producto. Podés usar las flechas del teclado cuando el carrusel tiene el foco.');

// Leave one clear contact action on screen when the section already offers it.
if('IntersectionObserver' in window){
 const visibleContactActions=new Set();
 const contactObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting&&entry.intersectionRatio>=.55)visibleContactActions.add(entry.target);else visibleContactActions.delete(entry.target);});$('.floating').classList.toggle('is-contextual',visibleContactActions.size>0);},{threshold:[0,.55,1]});
 document.querySelectorAll('.contact .button').forEach(action=>contactObserver.observe(action));new MutationObserver(()=>{document.querySelectorAll('.detail-inquiry').forEach(action=>contactObserver.observe(action));for(const action of visibleContactActions){if(!action.isConnected)visibleContactActions.delete(action);}$('.floating').classList.toggle('is-contextual',visibleContactActions.size>0);}).observe($('#product-detail'),{childList:true,subtree:true});
}

// Responsive navigation: dismiss outside the header and reset when returning to desktop.
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
