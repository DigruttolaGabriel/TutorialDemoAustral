import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
export default class MyCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>
                        {this.props.name}
      </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                                Joined in 2015
        </span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.name}Matthew is a musician living in Nashville.
      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
      </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}