---
layout: default
no-header: true
custom-css: index
custom-js: index
end-of-body-script: contact-form.js
---

<header>
<div class="image">
    <img src="{{ '/assets/header.jpg' | relative_url }}" />
    <img src="{{ '/assets/triangle.svg' | relative_url }}" />
</div>
<div class="text">
    <h1>Adele & Carl</h1>
    <h2>Consulting</h2>
</div>
</header>

<section id="headline" markdown="1">
{%- include copy/headline.md %}
</section>

<section id="our-services" markdown="1">
{%- include copy/about_us.md %}
</section>

<section id="the-team"><div>
    <h2>The Team</h2>
    <div>
        <img class="headshot" src="/assets/headshot_adele.jpg" width=200 />
        <h3>Adele Peterson <a class="social" href="{{ site.data.website.linkedin.adele }}">{% include linkedin.svg %}</a></h3>
        {%- include copy/the_team_adele.md -%}
    </div>
    <div>
        <img class="headshot" src="/assets/headshot_carl.jpg" width=200 />
        <h3>Carl Peterson <a class="social" href="{{ site.data.website.linkedin.carl }}">{% include linkedin.svg %}</a></h3>
        {%- include copy/the_team_carl.md -%}
    </div>
</div></section>

<section id="contact-us" markdown="1">
{%- include copy/contact_us.md %}

<form id="contact-form" action="https://formspree.io/f/meqwjzqk" method="POST">
<input type="email" id="email" name="email" placeholder="Email" required />
<input type="text" id="name" name="name" placeholder="Name" required />
<textarea id="message" name="message" placeholder="Message" required>
</textarea>

<input type="text" name="_gotcha" class="gotcha" />
<div id="send-button-container">
    <input type="submit" name="submit" value="Send" />
</div>
<div id="contact-form-status"></div>
</form>

</section>
