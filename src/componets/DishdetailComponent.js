import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.detailDish != null){

            const commentList = this.props.detailDish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <Media tag="li" className="row">
                            <p className="col-12">{comment.comment}</p>
                            <p className="col-12">-- {comment.author}, {comment.date}</p>
                        </Media>
                    </div>
                );
            });

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.detailDish.image} alt={this.props.detailDish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{this.props.detailDish.name}</CardTitle>
                                <CardText>{this.props.detailDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <Media body className="col-12 col-md-5 m-1">
                        <Media heading>Comment</Media>
                        {commentList}
                    </Media>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }   
    }
}

export default DishDetail;

