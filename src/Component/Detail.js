import image from "./../asset/相羽あいなHP用-.jpg";
// import audio from "./../asset/AibaAina_VoiceSample.mp3";

const TalentItem = () => {
  return (
    <li>
      <a href="#">
        <figure class="st-list_thumb">
          <img
            width="1032"
            height="1366"
            // src="https://s3-ap-northeast-1.amazonaws.com/hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用-.jpg"
            src={image}
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt=""
            // srcset="https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用-.jpg 1032w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--227x300.jpg 227w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--768x1017.jpg 768w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--774x1024.jpg 774w"
            sizes="(max-width: 1032px) 100vw, 1032px"
          ></img>
        </figure>
      </a>
    </li>
  );
};
function TopDesc() {
  return (
    <div class="st-detail_top_desc">
      <div class="name-wrapper">
        <h1 class="name">相羽 あいな </h1>
        <p class="rome">Aina Aiba </p>
      </div>
      <div class="profile">
        <table>
          <tbody>
            {/* <tr>
              <th>誕生日</th>
              <td>10月17日 </td>
            </tr>
            <tr>
              <th>血液型</th>
              <td>O型 </td>
            </tr>
            <tr>
              <th>特技</th>
              <td>歌、トーク、リアクション </td>
            </tr>
            <tr>
              <th>趣味</th>
              <td>プロレス、サラブレッド鑑賞（競走馬） </td>
            </tr> */}
            <tr>
              <th>ツイッター</th>
              <td>
                <a href="https://twitter.com/aibaaiai" target="_blank">
                  https://twitter.com/aibaaiai
                </a>
              </td>
            </tr>
            <tr>
              <th>ブログ</th>
              <td>
                <a href="https://lineblog.me/aiba_aiai/" target="_blank">
                  https://lineblog.me/aiba_aiai/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <audio
          controls
          src={require("./../asset/AibaAina_VoiceSample.mp3").default}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
}

const socialMediaList = () => {
  return (
    <ul>
      <li>
        <a class="facebook" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="twitter" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="instagram" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="google" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i class="fa fa-google-plus" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};
const Detail = () => {
  return (
    <>
      <div class="st-detail_container">
      <div class="arrow-btn back-wrap">
        <div class="arrow-btn-li">
          <span class="arrow arrow-left"></span>
        </div>
        <span>BACK</span>
      </div>

        {/* <a href="#">BACK</a> */}
        <TalentItem />
        <TopDesc />
      </div>
    </>
  );
};

export default Detail;
