import image from "./../asset/相羽あいなHP用-.jpg";
import logo from "./../asset/starist_logo.png";

const TalentItem = (props) => {
  return (
    <li onClick={props.toggle}>
      <a href="#">
        <figure class="st-list_thumb">
          <img
            width="1032"
            height="1366"
            // src="https://s3-ap-northeast-1.amazonaws.com/hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用-.jpg"
            src={logo}
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt=""
            // srcset="https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用-.jpg 1032w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--227x300.jpg 227w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--768x1017.jpg 768w, https://hibiki-cast.jp/wp-content/uploads/2019/04/相羽あいなHP用--774x1024.jpg 774w"
            sizes="(max-width: 1032px) 100vw, 1032px"
          ></img>
        </figure>
        <div class="st-list_desc">
          <p class="st-list_name">Talent 1 </p>
          {/* <p class="st-list_rome">Aina Aiba </p> */}
        </div>
      </a>
    </li>
  );
};

const Listing = (props) => {
  return (
    <>
      <h1 class="listing-title">TALENT PROFILE</h1>
      <div class="buttons">
        <div class="container">
          <a href="#" class="btn effect04" data-sm-link-text="CLICK">
            <span>VOICE ACTOR</span>
          </a>
          <a href="#" class="btn effect04 actress" data-sm-link-text="CLICK">
            <span>VOICE ACTRESS</span>
          </a>
        </div>
      </div>

      <div class="st-list_container st-list_container-f">
        <ul>
          <TalentItem toggle={props.toggle}/>
          <TalentItem toggle={props.toggle}/>
          <TalentItem toggle={props.toggle}/>
          <TalentItem toggle={props.toggle}/>
          <TalentItem toggle={props.toggle}/>
          <TalentItem toggle={props.toggle}/>
        </ul>
      </div>
    </>
  );
};

export default Listing;
