---
title: "Apps"
layout: page
description: Apps Jon's worked on.
---

<ul style="list-style-type: none;">
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
  {%- if sitepage.path contains "/apps/" -%}
    {%- unless sitepage.path contains "/apps/index.md" -%}
      <li {% if page.url == sitepage.url %} class="active"{% endif %}>
        <a href="{{ sitepage.url }}">{{ sitepage.title }}</a>
        <p>{{ sitepage.subtitle }}</p>
      </li>
    {%- endunless -%}
  {%- endif -%}
{% endfor %}
</ul>