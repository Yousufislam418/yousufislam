export default function Form(){
 return(`
<section class="my-20">
  <div>
    <div>
        <form class="form">
            <div class="title-field">
             <h1>Form</h1>
            </div>
            <div class="field">
                <label>Name</label>
                <input class="input" type="text" name="name" placeholder="Name">
            </div>
            <div class="field">
                <label>Email</label>
                <input class="input" type="email" name="email" placeholder="Email">
            </div>
            <div class="field">
                <label>Password</label>
                <input class="input" type="password" name="password" placeholder="Password">
            </div>
            <div class="btn-feild">
                <input class="btn-md danger" type="submit" value="Submit">
            </div>
        </form>
    </div>
  </div>
 </section>
 `);
}
