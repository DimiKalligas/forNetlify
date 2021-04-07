import React, { Component } from 'react'

class MemeGenerator extends Component {
    // also, I don't need to use constructor() anymore! woohooo!
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }
    // I don't have to bind my methods in the constructor if I use arrow functions
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)


    componentDidMount() {  // API call
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // this prevents the page from refreshing -- without it setState DOES NOT work!
        let r = Math.floor(Math.random() * this.state.allMemeImgs.length)
        let randMeme = this.state.allMemeImgs[r].url

        this.setState({
            randomImg: randMeme
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange} />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator