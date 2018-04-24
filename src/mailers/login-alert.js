module.exports = function sendLoginAlertEmail(ctx, { user }) {
  return ctx.sendMail('login-alert', { to: 'iic2513@dispostable.com', subject: 'Alert!' }, { user });
};
