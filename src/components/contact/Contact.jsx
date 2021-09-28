import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="headingContainer">
        <h1>Contact me</h1>
      </div>
      <form action="">
        <div className="formGroup field">
          <input
            type="input"
            class="formField"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="formLabel">
            Name
          </label>
        </div>
        <div className="formGroup field">
          <input
            type="input"
            class="formField"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="formLabel">
            E-Mail
          </label>
        </div>
        <div className="formGroup field">
          <input
            type="input"
            class="formField"
            multiple="true"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="formLabel">
            Topic
          </label>
        </div>
        <div className="formGroup field">
          <input
            type="input"
            class="formField"
            placeholder="Name"
            name="name"
            id="name"
            cols="40"
            rows="5"
            required
          />
          <label for="name" class="formLabel">
            Message
          </label>
        </div>
        <div className="buttonContainer">
          <button type="submit">
            <p>Abschicken</p>
          </button>
        </div>
      </form>
    </div>
  );
}
