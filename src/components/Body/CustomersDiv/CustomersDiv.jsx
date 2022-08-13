import classes from "./CustomersDiv.module.css";
import { motion } from "framer-motion";

export default function CustomersDiv() {
  return (
    <div className={classes.customersDiv}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What our customers say.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.firstDiv}>
          <div className={classes.upperDiv}>
            <p>
              The explanations are clear, the teachers are responsible and
              friendly, and the homework is real practice
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv1}></div>
            <div className={classes.profession}>
              <h3>Rob Zuber</h3>
              <p>CEO</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              I learned a lot of new things, I immediately apply my knowledge in
              my work, found myself a new client
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv2}></div>
            <div className={classes.profession}>
              <h3>Melanle Pickett</h3>
              <p>IT Manager</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              I really like the speakers of the course and the quality of the
              lectures. There is always feedback
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv3}></div>
            <div className={classes.profession}>
              <h3>Regis Wilson</h3>
              <p>Engineer</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              A new profession is a lot of vivid impressions. Today I was at the
              presentation of the regional business award
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv4}></div>
            <div className={classes.profession}>
              <h3>Emma Willy</h3>
              <p>Cook</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              The course shows all the stages of the work of an SMM marketer.
              And also excellent practice
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv5}></div>
            <div className={classes.profession}>
              <h3>Jospeh Redmon</h3>
              <p>Analyst</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              On the course "Data Analyst in Python" everything is very
              interesting and informative, very detailed material
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv6}></div>
            <div className={classes.profession}>
              <h3>James Stone</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.upperDiv}>
            <p>
              For several months I studied one of the most popular programming
              languages on the course "Java developer"
            </p>
          </div>
          <div className={classes.lowerDiv}>
            <div className={classes.imgDiv7}></div>
            <div className={classes.profession}>
              <h3>Li Zhaou</h3>
              <p>Digital Marketer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
