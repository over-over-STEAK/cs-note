(function(root){
'use strict';
const CS={
 binaryValue(bits){return bits.reduce((n,b)=>n*2+Number(b),0);},
 gate(kind,a,b){if(kind==='AND')return Number(Boolean(a&&b));if(kind==='OR')return Number(Boolean(a||b));if(kind==='NOT')return Number(!a);throw new Error('Unknown gate');},
 traverse(graph,start,kind){const order=[],seen=new Set();if(kind==='BFS'){const q=[start];seen.add(start);while(q.length){const v=q.shift();order.push(v);for(const n of graph[v])if(!seen.has(n)){seen.add(n);q.push(n);}}}else{function visit(v){if(seen.has(v))return;seen.add(v);order.push(v);graph[v].forEach(visit);}visit(start);}return order;}
};root.CS=CS;if(typeof module!=='undefined')module.exports=CS;
})(typeof window!=='undefined'?window:globalThis);