import React from 'react';
// import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import { FaCode, FaDesktop, FaGraduationCap } from 'react-icons/fa';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
  return (
    <>
      <VerticalTimeline className='timeline'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          contentArrowStyle={{
            borderRight: '7px solid  red)'
          }}
          date={<p className='date'>2019 - Present</p>}
          iconStyle={{ background: '#333', color: '#36ffab' }}
          icon={<FaCode />}
        >
          <h3 className='vertical-timeline-element-title text'>
            React Web Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            The Colony, TX
          </h4>

          <p>
            Developing front and back end web applications for small businesses.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          contentArrowStyle={{
            borderRight: '7px solid  red)'
          }}
          date={<p className='date'>Nov 2019 - March 2020</p>}
          iconStyle={{ background: 'black', color: '#E8FDF5' }}
          icon={<FaDesktop />}
        >
          <h3 className='vertical-timeline-element-title text'>
            Technical Support I / Password Reset
          </h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            Charles Schwab - Lakeview, TX
          </h4>

          <p>Assisted clients with:</p>
          <ul>
            <li>Password Resets</li>
            <li>Device Validation</li>
            <li>Creating new online accounts </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={<p className='date'>2016 - 2019</p>}
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          iconStyle={{ background: 'rgb(51, 52, 53)', color: '#FBF1A9' }}
          icon={<FaDesktop />}
        >
          <h3 className='vertical-timeline-element-title text'>
            Customer Service Representative
          </h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            Premier Travels - Lewisville, TX
          </h4>

          <ul>
            <li> Planned, described, arranged itinerary tour packages</li>
            <li>
              Confirmed reservations, refunds, or exchanges via phone, email and
              or mail
            </li>
            <li>
              Managed online booking inquiries, assisted guests & travel
              partners with questions throughout entire booking cycle
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={<p className='date'>2014 - 2016</p>}
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          iconStyle={{ background: 'black', color: '#FBF1A9' }}
          icon={<FaGraduationCap />}
        >
          <h3 className='vertical-timeline-element-title text'>Student</h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            El Centro College - Dallas, TX
          </h4>

          <ul>
            <li>
              {' '}
              Managing, maintaining & troubleshooting PC's, CISCO Routers &
              Switches
            </li>

            <li>Computer Information Technology Networking Associate</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          contentArrowStyle={{
            borderRight: '7px solid  red)'
          }}
          date={<p className='date'>JAN 2010 - AUG 2014</p>}
          iconStyle={{ background: 'black', color: '#E8FDF5' }}
          icon={<FaDesktop />}
        >
          <h3 className='vertical-timeline-element-title text'>PBX Operator</h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            Adolphus Hotel - Dallas, TX
          </h4>

          <ul>
            <li>
              Took reservations over phone, in person and via computer for
              guests and provided confirmation information
            </li>
            <li>
              {' '}
              Planned coverage needs and organized services to support incoming
              special events
            </li>
            <li>
              {' '}
              Assisted other hotel personnel in various capacities including
              overseeing entire front desk
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={<p className='date'>DEC 2010 - AUG 2011</p>}
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          iconStyle={{ background: 'black', color: '#FBF1A9' }}
          icon={<FaDesktop />}
        >
          <h3 className='vertical-timeline-element-title text'>Data Entry</h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            Xerox Corporation - Lewisville, TX
          </h4>

          <ul>
            <li>
              {' '}
              Daily tracking of all large dry ink shipments via arrival tracking
              System Communicated daily with vendors and carriers
            </li>
            <li>
              {' '}
              Maintained strong vendor connections at all stages, including
              arranging pricing, delivery structures & managing specific
              shipment or paperwork concerns
            </li>
            <li>
              {' '}
              Communicated with vendors regarding back order availability,
              future inventory and special orders
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date={<p className='date'>JUNE 2005 - OCT 2007</p>}
          contentStyle={{ background: 'rgb(51, 52, 53)', color: 'azure' }}
          iconStyle={{ background: 'black', color: '#FBF1A9' }}
          icon={<FaDesktop />}
        >
          <h3 className='vertical-timeline-element-title text'>
            Tech Support I
          </h3>
          <h4 className='vertical-timeline-element-subtitle text'>
            Virgin Mobile - Carrollton, TX
          </h4>

          <ul>
            <li>
              {' '}
              Assisted customers with creating or terminating existing accounts{' '}
            </li>
            <li>Processed account payments</li>
            <li>Remotely troubleshooting & programing client phones </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Resume;
