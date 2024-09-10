import { useState } from "react";
import "../css/App.css";
import { Modal } from "@nairodp/modal";
import { Form } from "../components/Form";
import { CustomCloseButton } from "../components/CustomCloseButton";
import Product from "./Product";
import { Link } from "react-router-dom";

export default function App() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal21, setOpenModal21] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);

  const [openMyFirstModal, setOpenMyFirstModal] = useState(false);
  const [openMySecondModal, setOpenMySecondModal] = useState(false);
  const [openMyFirstModal2, setOpenMyFirstModal2] = useState(false);
  const [openMySecondModal2, setOpenMySecondModal2] = useState(false);

  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);
  const [openModal12, setOpenModal12] = useState(false);
  const [openModal13, setOpenModal13] = useState(false);
  const [openModal14, setOpenModal14] = useState(false);

  return (
    <>
      <div className="band"></div>
      <div className="wrapper">
        <div className="header">
          <h1>React Modal</h1>
          <p>The convertion of the jQuery Modal librairy in React.</p>
          <ul>
            <li>No images & light-weight</li>
            <li>Easy to style</li>
            <li>Manageable with Props</li>
            <li>Close with click or ESC key</li>
            <li>
              Built by <a href="https://github.com/nairodp">nairodP</a>
            </li>
          </ul>
        </div>
        <hr />
        <h2 id="install">
          <a href="#install">#</a> Install
        </h2>
        <p>
          The simplest method to use it in your project is to install the
          package with npm or yarn with your terminal and import directly the
          package host on NPM{" "}
          <a href="https://www.npmjs.com/package/@nairodp/modal">here</a>.
        </p>
        <pre>npm install @nairodp/modal</pre>
        <span>or :</span>
        <pre>yarn add @nairodp/modal</pre>
        <span>and after that :</span>
        <pre>import &#123; Modal &#125; from "@nairodp/modal";</pre>
        <p>
          Refer to the{" "}
          <a
            href="https://github.com/NairodP/Modal_Plugin/blob/master/README.md"
            target="_blank"
          >
            README
          </a>{" "}
          for more information.
        </p>
        <hr />

        {/* Exemple 1 */}
        <h2 id="example-1">
          <a href="#example-1">#</a> Example 1: Open & Close with buttons or
          something else
        </h2>

        <pre>
          <code className=" html">
            <span className="comment">
              &lt;!-- Modal HTML embedded directly into document --&gt;
            </span>
            <br />
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <span className="attribute">
                {" "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <span className="attribute">
                {" "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            Thanks for clicking. That felt good.
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">a</span>
              <span className="attribute">
                {" "}
                close-modal=<span className="value">"true"</span>
              </span>
              &gt;
            </span>
            Close
            <span className="tag">
              &lt;/<span className="keyword">a</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
            <br />
            <br />
            <span className="comment">
              &lt;!-- Button to open the modal --&gt;
            </span>
            <br />
            <span className="tag">
              &lt;<span className="keyword">button</span>
              <span className="attribute">
                {" "}
                className=<span className="value">"modal-button"</span>
              </span>
              <span className="attribute">
                {" "}
                onClick=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;true&#41;&#125;
                </span>
              </span>
              &gt;
            </span>
            Open Modal
            <span className="tag">
              &lt;/<span className="keyword">button</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal1(true)}>
          Open Modal
        </button>
        <Modal open={openModal1} onClose={() => setOpenModal1(false)}>
          <p>
            Thanks for clicking. That felt good.
            <br />
            Click <a close-modal="true">close</a>, click the overlay, or press
            ESC
          </p>
        </Modal>

        <hr />

        {/* Exemple 2 */}
        <h2 id="example-2">
          <a href="#example-2">#</a> Example 2: Styled login form & events
        </h2>

        <p>This example demonstrates how visually customizable the modal is.</p>

        <button className="modal-button" onClick={() => setOpenModal2(true)}>
          Open Modal
        </button>
        <Modal open={openModal2} onClose={() => setOpenModal2(false)}>
          <Form fadeDown={0.2} onClose={() => setOpenModal2(false)} />
        </Modal>

        <br />
        <br />

        <p>And this example shows you how to easily customize your modal.</p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                modalStyle=
                <span className="value">
                  &#123;&#123; textAlign: "center", backgroundColor: "white"{" "}
                  &#125;&#125;
                </span>
              </span>
              <br />
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>
              <span className="attribute">
                {" "}
                className=
                <span className="value">"italicsAndCapitalLetters"</span>
              </span>
              &gt;
            </span>
            This is a custom modal !
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal21(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal21}
          onClose={() => setOpenModal21(false)}
          modalStyle={{ textAlign: "center", backgroundColor: "lightblue" }}
        >
          <p style={{ textTransform: "uppercase", fontStyle: "italic" }}>
            This is a custom modal !
          </p>
        </Modal>

        <br />

        <p style={{ fontStyle: "italic" }}>
          &#128312; As you can see, you can also customize the modal by adding
          your own classes to its various children.
        </p>

        <hr />

        {/* Exemple 3 */}
        <h2 id="example-3">
          <a href="#example-3">#</a> Example 3: Adjusting to content
        </h2>

        <p>
          This example shows how modals are centered automatically. It also
          demonstrates how a vertical scrollbar appears whenever the modal
          content overflows.
        </p>

        <button className="modal-button" onClick={() => setOpenModal3(true)}>
          Open Modal
        </button>
        <Modal open={openModal3} onClose={() => setOpenModal3(false)} showMore>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus! Libero officia, distinctio consequuntur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus!
          </p>
        </Modal>

        <br />
        <br />

        <p>
          {" "}
          By default, the modal has a width of 500px and a height of 7 lines of
          text. As in the example above, you'll need to add the{" "}
          <span style={{ color: "#000080" }}>showMore</span> props in order to
          be able to access its entire content while keeping this predefined
          size.
          <br />
          You can define the basic number of lines displayed with the{" "}
          <span style={{ color: "#000080" }}>defaultNumberOfLine</span> props,
          and also define the number of additional lines to be displayed when
          "Show More" is clicked with the{" "}
          <span style={{ color: "#000080" }}>lineAddOnShowMore</span> props.
          <br />
          If you want all the content to be displayed directly without using the
          showMore props, you can use the.
          <br />
          Finally, you can also directly modify the modal proportions with the{" "}
          <span style={{ color: "#000080" }}>modalStyle</span> props.
        </p>

        <p>
          This example use the{" "}
          <span style={{ color: "#000080" }}>totalDisplay</span> props.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                totalDisplay
              </span>
              <br />
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>
              &gt;
            </span>
            <span style={{ fontStyle: "italic" }}>Lorem*80</span>
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal8(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal8}
          onClose={() => setOpenModal8(false)}
          totalDisplay
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus! Libero officia, distinctio consequuntur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus!
          </p>
        </Modal>

        <br />
        <br />

        <p>
          And This example use the{" "}
          <span style={{ color: "#000080" }}>
            showMore, defaultNumberOfLine
          </span>{" "}
          and <span style={{ color: "#000080" }}>lineAddOnShowMore</span> props.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                showMore
              </span>
              <br />
              <span className="attribute">
                {"  "}
                defaultNumberOfLine=
                <span className="value">&#123;10&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                lineAddOnShowMore=
                <span className="value">&#123;5&#125;</span>
              </span>
              <br />
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>
              &gt;
            </span>
            <span style={{ fontStyle: "italic" }}>Lorem*80</span>
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal9(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal9}
          onClose={() => setOpenModal9(false)}
          showMore
          defaultNumberOfLine={10}
          lineAddOnShowMore={5}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus! Libero officia, distinctio consequuntur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores, reprehenderit deleniti exercitationem dolores vero
            magnam accusamus quia odio et quasi numquam ipsa provident nobis
            eaque beatae magni, neque libero voluptatibus facilis aspernatur.
            Aliquam, praesentium. Libero officia, distinctio consequuntur
            placeat blanditiis ipsa voluptatum magni mollitia. Obcaecati
            blanditiis id numquam, corporis modi ratione pariatur amet optio
            quam quis magni facilis laudantium distinctio sunt exercitationem
            omnis sint perspiciatis temporibus. Totam nobis, distinctio expedita
            ducimus odio, quaerat nostrum error quia quos possimus debitis
            repellendus asperiores molestiae quidem nesciunt! Temporibus error,
            explicabo et, fugit nam sit incidunt illo harum optio laborum
            aliquam provident accusamus!
          </p>
        </Modal>

        <hr />

        {/* Exemple 4 */}
        <h2 id="example-4">
          <a href="#example-4">#</a> Example 4: Preview a page directly from the
          modal
        </h2>

        <p>
          This example shows how easy it is to preview a page directly from your
          modal with React.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">Product</span>/&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">Link</span>
              <span className="attribute">
                {" "}
                to=<span className="value">"/product"</span>
              </span>
              &gt;
            </span>
            GO to the Page !
            <span className="tag">
              &lt;/<span className="keyword">Link</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal4(true)}>
          Open Modal
        </button>
        <Modal open={openModal4} onClose={() => setOpenModal4(false)}>
          <Product />
          <Link to="/product">GO to the Page !</Link>
        </Modal>

        <hr />

        {/* Exemple 5 */}
        <h2 id="example-5">
          <a href="#example-5">#</a> Example 5: The un-closable window
        </h2>

        <p>
          This demonstrates how to disable the default methods of closing the
          modal.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                ESCNotActive
              </span>
              <br />
              <span className="attribute">
                {"  "}
                noCloseButton
              </span>
              <br />
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"    "}
            If you do this, be sure to provide the user with an alternate method
            <br />
            {"    "}
            of{" "}
            <span className="tag">
              &lt;<span className="keyword">a</span>
              <span className="attribute">
                {" "}
                close-modal=<span className="value">"true"</span>
              </span>
              &gt;
            </span>
            closing the window.
            <span className="tag">
              &lt;/<span className="keyword">a</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal5(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal5}
          onClose={() => setOpenModal5(false)}
          ESCNotActive
          noCloseButton
        >
          <p>
            If you do this, be sure to provide the user with an alternate method
            of <a close-modal="true">closing the window.</a>
          </p>
        </Modal>

        <hr />

        {/* Exemple 6 */}
        <h2 id="example-6">
          <a href="#example-6">#</a> Example 6: Multiple Modals
        </h2>

        <p>
          By default, several modals can be open at a time. If you open a new
          modal while an existing modal is open, you can choose to add the
          closing states of one or more active modals.
        </p>

        <br />

        <p>
          In this example, each modal manages its closure state individually.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <span className="attribute">
                {" "}
                open=<span className="value">&#123;openMyFirstModal&#125;</span>
              </span>
              <span className="attribute">
                {" "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62;
                  setOpenMyFirstModal&#40;false&#41;&#125;
                </span>
              </span>
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            This is the text of the 1st Modal
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <span className="attribute">
                {" "}
                open=
                <span className="value">&#123;openMySecondModal&#125;</span>
              </span>
              <span className="attribute">
                {" "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62;
                  setOpenMySecondModal&#40;false&#41;&#125;
                </span>
              </span>
              &gt;
            </span>
            <br />
            {"    "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            This is the text of the 2nd Modal
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button
          className="modal-button"
          onClick={() => setOpenMyFirstModal(true)}
        >
          Open 1st Modal
        </button>
        <Modal
          open={openMyFirstModal}
          onClose={() => setOpenMyFirstModal(false)}
        >
          <p>This is the text of the 1st Modal</p>
          <button
            className="modal-button"
            onClick={() => setOpenMySecondModal(true)}
          >
            Open 2nd Modal
          </button>
          <Modal
            open={openMySecondModal}
            onClose={() => setOpenMySecondModal(false)}
          >
            <p>This is the text of the 2nd Modal</p>
          </Modal>
        </Modal>

        <br />
        <br />

        <p>In this example, the second modal also closes the first one.</p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <span className="attribute">
                {" "}
                open=<span className="value">&#123;openMyFirstModal&#125;</span>
              </span>
              <span className="attribute">
                {" "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62;
                  setOpenMyFirstModal&#40;false&#41;&#125;
                </span>
              </span>
              &gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            This is the text of the 1st Modal
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <span className="attribute">
                <br />
                {"    "}
                open=
                <span className="value">&#123;openMySecondModal&#125;</span>
              </span>
              <span className="attribute">
                <br />
                {"    "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; &#123;
                  <br />
                  {"      "}setOpenMyFirstModal&#40;false&#41;
                  <br />
                  {"      "}setOpenMySecondModal&#40;false&#41;
                  <br />
                  {"    "}&#125;&#125;
                </span>
              </span>
              &gt;
            </span>
            <br />
            {"    "}
            <span className="tag">
              &lt;<span className="keyword">p</span>&gt;
            </span>
            This is the text of the 2nd Modal
            <span className="tag">
              &lt;/<span className="keyword">p</span>&gt;
            </span>
            <br />
            {"  "}
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
            <br />
            <span className="tag">
              &lt;/<span className="keyword">Modal</span>&gt;
            </span>
          </code>
        </pre>

        <button
          className="modal-button"
          onClick={() => setOpenMyFirstModal2(true)}
        >
          Open 1st Modal
        </button>
        <Modal
          open={openMyFirstModal2}
          onClose={() => setOpenMyFirstModal2(false)}
        >
          <p>This is the text of the 1st Modal</p>
          <button
            className="modal-button"
            onClick={() => setOpenMySecondModal2(true)}
          >
            Open 2nd Modal
          </button>
          <Modal
            open={openMySecondModal2}
            onClose={() => {
              setOpenMyFirstModal2(false);
              setOpenMySecondModal2(false);
            }}
          >
            <p>This is the text of the 2nd Modal</p>
          </Modal>
        </Modal>

        <br />
        <br />

        <p style={{ color: "#c61b1b", fontWeight: "500" }}>
          Important: If several modals are nested and you want one of them to
          have the "ESCNotActive" props, it's imperative that the parent modals
          also have this props!
        </p>

        <hr />

        {/* Exemple 7 */}
        <h2 id="example-7">
          <a href="#example-7">#</a> Example 7: Fade Transitions
        </h2>

        <p>
          You can achieve a simple fade effect by specifying the{" "}
          <span style={{ color: "#000080" }}>fadeDuration</span> props.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                fadeDuration=<span className="value">&#123;600&#125;</span>
              </span>
              <br />
              &#47;&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal7(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal7}
          onClose={() => setOpenModal7(false)}
          fadeDuration={600}
        />

        <br />
        <br />

        <p>
          You can also add a delay to the appearance of the modal with the{" "}
          <span style={{ color: "#000080" }}>fadeDelay</span> props.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                fadeDuration=<span className="value">&#123;600&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                fadeDelay=<span className="value">&#123;300&#125;</span>
              </span>
              <br />
              &#47;&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal10(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal10}
          onClose={() => setOpenModal10(false)}
          fadeDuration={600}
          fadeDelay={300}
        />

        <br />
        <br />

        <p>
          Finally, you can also use the{" "}
          <span style={{ color: "#000080" }}>fadeDown</span> props to manage the
          fade-out on closing.
        </p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                fadeDuration=<span className="value">&#123;600&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                fadeDown=<span className="value">&#123;0.2&#125;</span>
              </span>
              <br />
              &#47;&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal11(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal11}
          onClose={() => setOpenModal11(false)}
          fadeDuration={600}
          fadeDown={0.2}
        />

        <br />

        <p style={{ fontStyle: "italic" }}>
          &#128312; In order not to overload the library, fadeDown manages the
          closing of both the modal and the overlay simultaneously.
          <br />
          &#128314; The fadeDown value is expressed in seconds and not
          milliseconds like fadeDuration and fadeDelay.
        </p>

        <hr />

        {/* Exemple 8 */}
        <h2 id="example-8">
          <a href="#example-8">#</a> Example 8: Custom Close Button
        </h2>

        <p>
          You can customize the close button with the{" "}
          <span style={{ color: "#000080" }}>customCloseButton</span> props.
          This props can be assigned several values.
          </p>
          <p style={{ fontStyle: "italic" }}>
            &#128312; The{" "}
            <span style={{ color: "#000080" }}>btnCloseModal</span> ID is used
            to target the custom button and customize its style.
          </p>
          <p style={{ fontStyle: "italic" }}>
            &#128314; You can use the{" "}
            <span style={{ color: "#000080" }}>customCloseButtonClass</span>{" "}
            props to add a custom class to your close button for easy styling.
          </p>
          
          <p>Below is an example for each of the 3 methods.</p>
        
        <pre>
            <code>
              <span className="comment">
                /* In your css, you can do something like this */
              </span>
              <br />
              <span className="tag">
                <span className="keyword"></span>
                <span className="tag">
                  &#35;btnCloseModal &#123;
                  <br />
                  <span className="attribute">
                    {"  "}
                    background-color:<span className="value"> &#35;000;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    color:<span className="value"> &#35;fff;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    border-radius:<span className="value"> 10px;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    padding:<span className="value"> 5px 10px;</span>
                  </span>
                  <br />
                  &#125;
                </span>
                <br />
              </span>
              <br />
              <span className="comment">/* or like this */</span>
              <br />
              <span className="tag">
                <span className="keyword"></span>
                <span className="tag">
                  .customClassAdd &#123;
                  <br />
                  <span className="attribute">
                    {"  "}
                    background-color:<span className="value"> &#35;000;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    color:<span className="value"> &#35;fff;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    border-radius:<span className="value"> 10px;</span>
                  </span>
                  <br />
                  <span className="attribute">
                    {"  "}
                    padding:<span className="value"> 5px 10px;</span>
                  </span>
                  <br />
                  &#125;
                </span>
                <br />
              </span>
            </code>
          </pre>
        <p>The string method :</p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                customCloseButton=
                <span className="value">&#123;"Close"&#125;</span>
              </span>
              <br />
              &#47;&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal12(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal12}
          onClose={() => setOpenModal12(false)}
          customCloseButton="Close"
          customCloseButtonClass="btnCloseModal1"
        />

        <br />
        <br />

        <p>The react node element method :</p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                customCloseButton=
                <span className="value">
                  &#123;&#60;button&#62;Close&#60;/button&#62;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                customCloseButtonClass=
                <span className="value">&#123;"closeBtnClass"&#125;</span>
              </span>
              <br />
              &#47;&gt;
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal13(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal13}
          onClose={() => setOpenModal13(false)}
          customCloseButton="Close"
          customCloseButtonClass="closeBtnClass"
        />

        <br />
        <br />

        <p>The JSX element method :</p>

        <pre>
          <code>
            <span className="tag">
              &lt;<span className="keyword">Modal</span>
              <br />
              <span className="attribute">
                {"  "}
                open=<span className="value">&#123;openModal&#125;</span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                onClose=
                <span className="value">
                  &#123;&#40;&#41; =&#62; setOpenModal&#40;false&#41;&#125;
                </span>
              </span>
              <br />
              <span className="attribute">
                {"  "}
                customCloseButton=
                <span className="value">
                  &#123;&#60;CustomButton /&#62;&#125;
                </span>
              </span>
              <br />
              /&gt;
              <br />
            </span>
          </code>
        </pre>

        <button className="modal-button" onClick={() => setOpenModal14(true)}>
          Open Modal
        </button>
        <Modal
          open={openModal14}
          onClose={() => setOpenModal14(false)}
          customCloseButton={<CustomCloseButton />}
        >
          <p>Bouton "Close" créé à partir d'un composant custom !</p>
        </Modal>

        <hr />
      </div>
    </>
  );
}
