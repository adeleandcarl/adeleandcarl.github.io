---
layout: page
custom-css: index
custom-js: index
---

<header>
<img src="{{ '/assets/hero.jpg' | relative_url }}" />
<div>
    We can solve your problems.
    <h1>Adele & Carl</h1>
    <h2>Technology consulting</h2>
</div>
</header>

<section id="our-story" markdown="1">

## Our Services

{% include about_us.md %}

</section>

<section id="the-team"><div>
    <h2>The Team</h2>
    <div>
        <img class="headshot" src="/assets/headshot_adele.jpg" width=200 />
        <h3>Adele Peterson <a class="social" href="{{ site.data.website.linkedin.adele }}"><img src="{{ '/assets/linkedin.svg' | relative_url }}"></a></h3>
        {%- include the_team_adele.md -%}
    </div>
    <div>
        <img class="headshot" src="/assets/headshot_carl.jpg" width=200 />
        <h3>Carl Peterson <a class="social" href="{{ site.data.website.linkedin.carl }}"><img src="{{ '/assets/linkedin.svg' | relative_url }}"></a></h3>
        {%- include the_team_carl.md -%}
    </div>
</div></section>

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