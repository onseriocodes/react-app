import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header inverted as='h4' content='Contact Me' />
                <List link inverted>
                  <List.Item as='a'>
                    <AiOutlineMail /> onseriocodes@gmail.com
                  </List.Item>
                  <List.Item as='a'>
                    <AiOutlinePhone /> 214-422-9562
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Onserio Codes
                </Header>
                <p> Copyright &copy; 2021, All rights reserved</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Footer;
