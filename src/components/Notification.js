import React, { PropTypes } from 'react';

const reactPropTypes = {
  details: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  classPrefix: PropTypes.string,
  handleHide: PropTypes.func.isRequired,
};

export const Notification = ({
  details,
  classPrefix,
  effect,
  handleHide,
  layout }) => (
    <div
      className={`${classPrefix}notification-${details.notificationType} ns-${details.hidden}
      ns-box ns-${layout} ns-effect-${effect} ns-type-${details.notificationType}`}
    >
      <div className={`${classPrefix}notification-text ns-box-inner`}>
        {details.notificationPayload}
      </div>
      <span className={`${classPrefix}notification-close ns-close`} onClick={handleHide}>
      </span>
    </div>
  );

Notification.propTypes = reactPropTypes;
