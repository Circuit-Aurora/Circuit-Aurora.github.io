<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js"></script>const Waline = require('@waline/vercel');

module.exports = Waline({
  async preSave(comment) {
    const isSapm = await Akismet.check(comment);
    if(isSpam) {
      return { errmsg: '这是一封垃圾邮件！' };
    }
  }
  async postSave(comment, pComment) {
    await mailto({
      mail: pComment.mail,
      text: `${comment.nick} 回复了您的评论`
    });
  }
  async preUpdate(comment) {
    return 'Then you can\'t update comment data';
  }
  async postUpdate(comment) {
    console.log(`评论 ${comment.objectId} 已更改！`);
  }
  async preDelete(commentId) {
    return 'Then you can\'t delete comment';
  }
  async postDelete(commentId) {
    console.log(`comment ${commentId} has been deleted!`);
  }
});