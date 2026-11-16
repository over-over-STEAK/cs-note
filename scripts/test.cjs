const assert=require('node:assert/strict');
const CS=require('../assets/js/core.js');
for(let n=0;n<256;n++)assert.equal(CS.binaryValue(n.toString(2).padStart(8,'0').split('').map(Number)),n);
for(let a=0;a<2;a++)for(let b=0;b<2;b++){
 assert.equal(CS.gate('AND',a,b),a*b);
 assert.equal(CS.gate('OR',a,b),Math.min(1,a+b));
 assert.equal(CS.gate('NOT',a,b),1-a);
}
const g={A:['B','C'],B:['A','D','E'],C:['A','F'],D:['B'],E:['B'],F:['C']};
assert.deepEqual(CS.traverse(g,'A','BFS'),['A','B','C','D','E','F']);
assert.deepEqual(CS.traverse(g,'A','DFS'),['A','B','D','E','C','F']);
const cycle={A:['B','C'],B:['A','C'],C:['A','B']};
for(const kind of ['BFS','DFS'])assert.deepEqual(CS.traverse(cycle,'A',kind),['A','B','C']);
console.log('PASS: all 256 binary values, gate truth tables, BFS/DFS and cyclic graph');
