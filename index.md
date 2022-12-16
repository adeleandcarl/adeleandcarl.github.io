---
layout: page
custom-css: index
custom-js: index
---

<header>
<img src="https://fakeimg.pl/180x400/400/cff?font=bebas&retina=1&text=Adele" />
<img src="https://fakeimg.pl/180x400/400/cff?font=bebas&retina=1&text=Carl" />
<div>
    <h1>Adele & Carl</h1>
    <h2>Technology consulting</h2>
</div>
</header>

<section id="our-story" markdown="1">

## Our Story

{% include about_us.md %}

</section>

<section id="the-team">
    <h2>The Team</h2>
    <div>
        <img src="https://fakeimg.pl/150/2ac3ae/fff?text=Adele+headshot&font=bebas&font_size=24&retina=1" width=150 />
        <h3>Adele Peterson</h3>
        {%- include the_team_adele.md -%}
    </div>
    <div>
        <img src="https://fakeimg.pl/150/2ac3ae/fff?text=Carl+headshot&font=bebas&font_size=24&retina=1" width=150 />
        <h3>Carl Peterson</h3>
        {%- include the_team_carl.md -%}
    </div>
</section>

<section id="contact-us" markdown="1">

## Contact Us

We'd love to hear from you!

<form id="my-form" action="https://formspree.io/FORMID" method="POST">
<input type="email" id="email" name="email" placeholder="Email" />
<input type="text" id="name" name="name" placeholder="Name" />
<textarea id="message" name="message" placeholder="Message">
</textarea>

<input type="text" name="_gotcha" class="gotcha" />
<div>
    <button id="my-form-button">Send</button>
</div>
<p id="my-form-status"></p>
</form>

</section>