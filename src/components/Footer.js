import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Contact Me' />
                <List link inverted>
                  <List.Item as='a'>onseriocodes@gmail.com</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Front-End</List.Item>
                  <List.Item as='a'>Static Site</List.Item>
                  <List.Item as='a'>Dynamic Site</List.Item>
                  <List.Item as='a'>Responsive Site</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Onserio Codes
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Footer;
