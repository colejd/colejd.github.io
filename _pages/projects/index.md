---
title: "Projects"
layout: page
description: Code projects you can try out.
---

<ul style="list-style-type: none;">
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
  {%- if sitepage.path contains "/projects/" -%}
    {%- unless sitepage.path contains "/projects/index.md" -%}
      {%- include preview-card.html page=sitepage -%}
    {%- endunless -%}
  {%- endif -%}
{% endfor %}
</ul>