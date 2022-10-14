import React from "react";
import MediaQuery from 'react-responsive'

export default function TodoItem(props) {
     let storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos === null) {
        storageTodos = [];
    }

    let filters = JSON.parse(localStorage.getItem("filter"));
    if (filters === null) {
        filters = [];
    }

    let customCategories = []

    for (let i=0;i<filters.length;i++) {
        customCategories.push(filters[i].category.toLowerCase())
    }


    let bg = []
    let texts = []

    let bgs = ['#ffc107','#0d6efd','#fd7e14','#dc3545','#198754']
    let text = ['👨‍💻','✈','🍉','⌚','🍿']

    let cats= ['work', 'travel', 'food', 'urgent', 'entertainment']
    return (
        <>
                
                    {props.todo.map((e, i)=>{
                        for (let j=0;j<storageTodos.length;j++) {
                            if (storageTodos[j][0].category.toLowerCase()==="work") {
                                bg.push('#ffc107')
                                texts.push('👨‍💻')
                            }
                            else if (storageTodos[j][0].category.toLowerCase()==="travel"){
                                bg.push('#0d6efd')
                                texts.push('✈')
                            } 
                            else if (storageTodos[j][0].category.toLowerCase()==="food"){
                                bg.push('#fd7e14')
                                texts.push('🍉')
                            } 
                            else if (storageTodos[j][0].category.toLowerCase()==="urgent") {
                                bg.push('#dc3545')
                                texts.push('⌚')
                            }
                            else if (storageTodos[j][0].category.toLowerCase()==="entertainment") {
                                bg.push('#198754')
                                texts.push('🍿')
                            }
                        }
                        return    <div className="container my-5 todoContainer" style={{width:props.todo[i].shrink?'50%':'auto', transition:'all .3s ease-in-out'}}>
                             {/* <> */}
                             <MediaQuery minWidth={900}>
                                <button className="btn categoryDiv_"onClick={()=>{props.shrink(props.todo[i].key)}} style={{padding:'0', backgroundColor:cats.includes(props.todo[i].category)?bgs[cats.indexOf(props.todo[i].category)]:filters[customCategories.indexOf(props.todo[i].category.toLowerCase())].color, padding:'100px 0'}}>
                                    <span className="text-center" style={{fontSize:'2rem'}}>{cats.includes(props.todo[i].category)?text[cats.indexOf(props.todo[i].category)]:filters[customCategories.indexOf(props.todo[i].category.toLowerCase())].char}</span>
                                </button>
                             </MediaQuery>
                             <MediaQuery maxWidth={900}>
                             <button disabled={true} className="btn categoryDiv_"onClick={()=>{props.shrink(props.todo[i].key)}} style={{padding:'0', backgroundColor:cats.includes(props.todo[i].category)?bgs[cats.indexOf(props.todo[i].category)]:filters[customCategories.indexOf(props.todo[i].category.toLowerCase())].color, padding:'100px 0'}}>
                                    <span className="text-center" style={{fontSize:'2rem'}}>{cats.includes(props.todo[i].category)?text[cats.indexOf(props.todo[i].category)]:filters[customCategories.indexOf(props.todo[i].category.toLowerCase())].char}</span>
                                </button>
                             </MediaQuery>
                            <div className="item card text-center">
                                <div className="card-header" style={{backgroundColor: props.todo[i].completed===true?'hsl(150, 60%, 85%)':props.todo[i].starred?'hsl(58, 100%, 84%)':'white'}}>
                                    <strong className="todoTitle">{props.todo[i].title}</strong>
                                </div>
                                <div className="card-body todoDesc">
                                    <p className="card-text todoDesc2">{props.todo[i].description}</p>
                                </div>
                                <hr />
                                <div className="my-2 d2" style={{color: Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))>5 || props.todo[i].completed===true?"green":"orangered"}}>
                                <strong className="dueDate">
                                    {props.todo[i].completed===false?isNaN(Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24)))===true||Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))<0?"• No due date": props.todo[i].completed===false?Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))===0?"• Due today":"• Due "+Math.round((new Date(props.todo[i].due).getTime()-new Date().getTime())/(1000*60*60*24))+'d':"Done":"Done"}
                                
                                </strong>
                                </div>
                            <div className="my-2 card-footer"  style={{float:'right'}}>
                                <img onClick={()=>{props.edit(props.todo[i].key)}} src={require('../edit.jpg')} alt="edit" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.done(props.todo[i].key, 'starred')}} src={require('../star.jpg')} alt="edit" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.done(props.todo[i].key, 'completed')}} src={require('../done.jpg')} alt="done" style={{marginRight:'20px'}} />
                                <img onClick={()=>{props.del(props.todo[i].key)}} src={require('../del.png')} alt="delete" />
                            </div>
                            </div>
                        {/* </> */}
            </div>
                        })}
        </>
    )
}