window.dom = {
    //创建节点

    // create(string){
    //     const container = document.createElement('div'); 
    //     container.innerHTML = string
    //     return container.children[0]
    // }
    
    create(string){
        const container = document.createElement('template'); //template标签可以容纳任意类型的元素，如果用div标签，就需要符合语法规则，比如在div标签内创建一个td标签，就会报错。
        container.innerHTML = string.trim();  //避免前面有空格
        return container.content.firstChild;
    },

    //在节点后面加节点
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling);
    },

    //在节点前面加节点
    before(node, node2){
        node.parentNode.insertBefore(node2, node);
    },

    //加子节点
    append(parent, node){
        parent.appendChild(node)
    },

    //加父节点
    wrap(node, parent){
        dom.before(node, parent)
        dom.append(parent, node)
    },

    //删除节点
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },

    //删除子节点
    empty(node){
        //node.innerHTML('')
        const arr = []
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return arr
    },

    //用于读写属性
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value)
        } else if(arguments.length === 2) {
            return node.getAttribute(name)
        }
    },

    //用于读写文本内容
    text(node, string){
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string  //ie
            }else{
                node.textContent = string  //firefox, chrome
            }
        } else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText  //ie
            }else{
                return node.textContent  //firefox, chrome
            }
        }
    },

    //用于读写HTML
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string
        } else if(arguments.length === 1){
            return node.innerHTML
        }

    },

    //改style
    style(node, name, value){
        if(arguments.length ===3){
            //dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if(arguments.length ===2 ){
            if(name instanceof Object){
                //object
                for(let key in name){
                    node.style[key] = name[key]
            }}else if(typeof name === 'string'){
                //string
                return node.style[name]
            }
            //dom.style(div, 'color')
        }
    },

    //dom.class.add(test, 'red')
    class:{
        add(node, className){
            node.classList.add(className)
        },
        remove(node, className){
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        },
    },

    //onclick
    on(node, eventName, fn){
        node.addEventListener(eventName, fn)
    },

    off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
    },

    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },

    parent(node){
        return node.parentNode
    },

    children(node){
        return node.children
    },

    siblings(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    }

};


