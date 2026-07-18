---
layout: page
title: Publicações Recentes
permalink: /publicacoes/
description:
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/publicacoes.md -->
<div class="projects">
  {% assign sorted_publicacoes = site.publicacoes | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for publicacao in sorted_publicacoes %}
      {% include publicacoes.liquid %}
    {% endfor %}
  </div>
</div>
