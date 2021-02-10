import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import Typed from 'react-typed';
import pic from '../img/pic.JPG';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';
import Resume from './Resume';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
    <Header
      as='h1'
      content={<p className='title'>Hi, I'm Tony Momanyi</p>}
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as='h2'
      inverted
      className='title'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2em'
      }}
    >
      I develop web apps using...{' '}
      <Typed
        className='typed-text'
        strings={['HTML', 'CSS', 'JavaScript', 'REACT', 'REDUX']}
        typeSpeed={150}
        backSpeed={120}
        loop
      />
    </Header>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '80vh', padding: '1em 0em' }}
            vertical
            className='heading'
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              className='menu'
            >
              <Container>
                <Menu.Item as='h2' textAlign='center'>
                  <Header.Content className='title' as='h2'>
                    OnseriO Codes
                  </Header.Content>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em', zIndex: 2 }}
              vertical
            >
              <Container>
                <Menu className='menu' inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item className='header' as='h2' textAlign='center'>
                    <Header.Content as='h2'>Onserio Codes</Header.Content>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Main = () => (
  <ResponsiveContainer>
    <Segment className='resume' style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
              About Me
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Over 10 years providing inbound/outbound client support & help
              desk experience. I have a Computer Information Technology
              Networking Associate from El Centro College, courses entailing
              managing, maintaining & troubleshooting CISCO routers, switches &
              PC's. Currently on my web development journey with the MERN stack
              in order to provide the same quality service to prospective
              clients looking to provide a smooth web experience for their
              customers.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image id='pic' centered />
          </Grid.Column>
        </Grid.Row>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          Resume
        </Divider>

        <Resume />
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default Main;
