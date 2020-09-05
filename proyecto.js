function mover(t) {
    if (!(t = t || e.event)) return;
    const n = this || t.target || e,
      o = n[q[t.type][p]];
    if (o)
      if (1 === o.length) v(o[0], n, t);
      else {
        const e = o.slice();
        for (let o = 0; o < e.length && (!t || !0 !== t[V]); o++) v(e[o], n, t)
      }
  }


function desplegar(tabla_a_desplegar,estadoT) {
var tabla = document.getElementById(tabla_a_desplegar);
var estadoT = document.getElementById(estadoT);

switch(tabla.style.display) {
case "none":
tablA.style.display = "block";
estadoT.innerHTML = "Ocultar conetenido"
break;
default:
tablA.style.display = "none";
estadoT.innerHTML = "Mostrar contenido"
break;
}
}

