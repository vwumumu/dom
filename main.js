const div = dom.create('<div>newDiv</div>');

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi, I am Mumu')
const title =  dom.attr(test, 'title')
console.log(`title:${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)  //读test的text

dom.style(test, {border: '1px solid red',color: 'blue'})
dom.style(test, 'border')
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test,'blue'))


const fn = ()=>{
    console.log('click')
}

dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2))[0]

console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#e2')[    ]))
