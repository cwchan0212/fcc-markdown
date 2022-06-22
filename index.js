import { marked } from "https://cdn.skypack.dev/marked@4.0.17"
class App extends React.Component {
  
  state = {
    text: ""
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    const markdown = marked(text);
    
    return (
      <div >
        <h2 className="text-center m-4">Convert your markdown</h2>  
        <div className="row">
          <div className="col-6" id="edit">
            <h6 className="text-center">Enter your markdown here: </h6>
            <textarea className="form-control" id="editor" value={text} onChange={this.handleChange}/>
            
          </div>
          <div className="col-6" id="preview">
            <h6 className="text-center">See the result:</h6>
             <div className="preview rounded p-2" dangerouslySetInnerHTML= {{__html: markdown}}>
             </div>
          </div> 
        </div>

            

            
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
