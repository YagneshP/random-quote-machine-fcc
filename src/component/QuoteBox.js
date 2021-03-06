
import { Button, Card, Row, Col } from 'react-bootstrap'
import React,{useEffect, useState} from 'react'
import axios from "axios"
const QuoteBox = () => {
const[quote , setQoute] = useState()
useEffect(() => {
	axios.get("https://api.quotable.io/random")
	.then(res=>{
		setQoute(res.data)
	})
}, [])
const handleClick= () => {
	axios.get("https://api.quotable.io/random")
	.then(res=>{
		setQoute(res.data)
	})
}
	return (
		<Row xs={1}>
			<Col>
		<Card id="qoute-box"  >
			<Card.Body className=" d-flex justify-content-center align-items-center flex-column">
			<Card.Text id="text" className={"quote"}>{quote? quote.content:null}
			</Card.Text>
			<Card.Text id="author" className="__author" >{quote?quote.author:null}</Card.Text>
			<div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
			<Button as="a" href={quote?`https://twitter.com/intent/tweet?text=${quote.content} ~${quote.author}` : null} data-text={quote? quote.content : null } target="_blank"  alt="twitter" id="tweet-quote">Twitter</Button>
			 <Button id="new-quote" onClick={handleClick}>New Quote</Button>
			</div>

			</Card.Body>
		</Card>
		</Col>
		</Row>
	)
}

export default QuoteBox
