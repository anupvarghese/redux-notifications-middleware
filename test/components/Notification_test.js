import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { Notification } from '../../src/components/Notification';

describe('Notification component', () => {
  it('Renders notification component', () => {
    const wrapper = shallow(
      <Notification
        details={{
          notificationType: 'success',
          notificationPayload: 'test message',
        }}
        classPrefix={'pre-'}
        effect={'slide'}
        layout={'growl'}
        handleHide={() => {}}
      />
    );
    expect(wrapper.find('.ns-box').length).to.equal(1);
  });

  it('fires handleHide when close button is clicked', () => {
    const handleHideSpy = spy();
    const wrapper = shallow(
      <Notification
        details={{
          notificationType: 'success',
          notificationPayload: 'test message',
        }}
        classPrefix={'pre-'}
        effect={'slide'}
        layout={'growl'}
        handleHide={handleHideSpy}
        hidden="shown"
      />
    );
    wrapper.find('.ns-close').simulate('click');
    expect(handleHideSpy.callCount).to.equal(1);
  });
});
