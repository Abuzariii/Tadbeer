import classes from "./PromoDiv.module.css";
import { motion } from "framer-motion";

export default function PromoDiv() {
  return (
    <div className={classes.PromoDiv}>
      <div className={classes.getSkill}>
        <div className={classes.long}>
          <h1>
            موجودہ دور کی لیبر مارکیٹ اپنے اصول خود بناتی ہے۔ آج اپنے میدان میں
            مہارت حاصل کرنے کے لیے پیشہ ورانہ صلاحیتوں کی اشد ضررورت ہے۔
          </h1>
        </div>
        <div className={classes.short}>
          <h1>ایک خودمختار روزگار کے حصول کے لیے آج ہی ہنر حاصل کریں ۔</h1>
        </div>
      </div>

      {/* Video Div */}
      <div className={classes.videoDiv}>
        <div className={classes.qualitiesDiv}>
          <ul>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={classes.imgDiv}>
                <img
                  src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550b1eff7681300db93_ico_skills-leadership.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={classes.textDiv}>
                <div className={classes.txt1}>Leadership</div>
                <div className={classes.txt2}>
                  Fully committed to the success company
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={classes.imgDiv}>
                <img
                  src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5500e03d92bc1747cb2_ico_skills-responsibility.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={classes.textDiv}>
                <div className={classes.txt1}>Responsibility</div>
                <div className={classes.txt2}>
                  Employees will always be my top priority
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={classes.imgDiv}>
                <img
                  src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5506ec5691cba88bb5b_ico_skills-flexibility.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className={classes.textDiv}>
                <div className={classes.txt1}>Flexibility</div>
                <div className={classes.txt2}>
                  The ability to switch is an important skill
                </div>
              </div>
            </motion.li>
          </ul>
        </div>

        <div className={classes.office}>
          <motion.div
            className={classes.aboutDiv}
            initial={{ opacity: 0, scale: 0, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classes.d1}>
              <label className={`${classes.amount} ${classes.amount1}`}>
                10
              </label>
              <label className={`${classes.value} ${classes.value1}`}>
                Years Experience
              </label>
            </div>

            <div>
              <label className={classes.amount}>250</label>
              <label className={classes.value}>Types of Courses</label>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
