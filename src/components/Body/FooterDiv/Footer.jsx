import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.topDiv}>
        <div className={classes.joinCommunity}>
          <h3>Join our community</h3>
          <div className={classes.searchDiv}>
            <input
              type="search"
              placeholder="Find your passion"
              className={classes.search}
            ></input>
            <div className={classes.GoDiv}>Go</div>
          </div>
        </div>
        <div className={classes.findShit}>
          <div>
            <label>Find passion</label>
            <label>Categories</label>
          </div>
          <div>
            <label>Skills</label>
            <label>Customer</label>
          </div>
        </div>
        <div className={classes.logo}>
          <h1>تدبیر</h1>
        </div>
      </div>
      <div className={classes.bottomDiv}>
        <div className={classes.rightsReserved}>
          <img
            src="https://assets.website-files.com/617fa48948c7ab24b715140e/619f7e9a1cc6db8ecfc33794_logo-copyright.svg"
            loading="eager"
            alt=""
          />
          <div>2021 Abuzar. All rights reserved</div>
        </div>
        <div className={classes.socialDiv}>
          <a
            href="https://www.facebook.com/ImranKhanOfficial"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffa14d2842923cf72ce_ico_soc-fb.svg"
              loading="eager"
              alt=""
            />
          </a>
          <a
            href="www.linkedin.com/in/abuzariii"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffb14d284f5accf72cf_ico_soc-in.svg"
              loading="eager"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/abuzariii/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ec00349dffaacd6f2fdf1_ico_soc-inst.svg"
              loading="eager"
              alt=""
            />
          </a>
          <a
            href="https://github.com/Abuzariii"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://assets.website-files.com/617fa48948c7ab24b715140e/618ebffa2d06733e48015aa2_ico_soc-dribbble.svg"
              loading="eager"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
