import React from "react";
import "./calc.scss";
export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {currVal:''};
    }
    calc= (x)=>{
        if (x === "="){
            console.log(this.state.currVal);
            this.setState({currVal:eval(this.state.currVal)});
        }
        else
        this.setState({currVal:this.state.currVal+x});
    }
    render() {
        return(
            <div className={'calculator-container'}>
                <div className={'d1'}>
                    <div>{this.state.currVal}</div>
                </div>
                <div className={'d2'}>
                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('%')
                            }}>%</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('CE')
                            }}>CE</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('Clear')
                            }}>C</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('back')
                            }}><i className='fas fa-backspace'/></button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('inv')
                            }}><sub>1/x</sub></button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('sqr')
                            }}>
                                <sub>x</sub>
                                <super>2</super>
                            </button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('root')
                            }}><i className="fas fa-square-root-alt"/></button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('/')
                            }}><i className="fas fa-divide"/></button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('7')
                            }}>7</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('8')
                            }}>8</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('9')
                            }}>9</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('*')
                            }}>X</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('4')
                            }}>4</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('5')
                            }}>5</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('6')
                            }}>6</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('-')
                            }}>-</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('1')
                            }}>1</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('2')
                            }}>2</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('3')
                            }}>3</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('+')
                            }}>+</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <button onClick={()=>{
                                this.calc('plus-minus')
                            }}><sub>+/-</sub></button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('0')
                            }}>0</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('.')
                            }}>.</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                this.calc('=')
                            }} className="equals-button">=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
