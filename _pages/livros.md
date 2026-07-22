---
layout: page
title: Livros
title_en: Books
permalink: /livros/
description: Livros publicados por membros do GRAPHID.
description_en: Books published by GRAPHID members.
nav: true
nav_order: 4.5
horizontal: false
---

<!-- pages/livros.md -->
<div class="publications">
  {% assign sorted_livros = site.livros | sort: "importance" %}
  {% assign grouped_livros = sorted_livros | group_by: "year" %}
  {% assign grouped_livros = grouped_livros | sort: "name" | reverse %}

  {% for group in grouped_livros %}
    <h2 class="bibliography">{{ group.name }}</h2>
    <div class="publication-list">
      {% for livro in group.items %}
        {% include livros.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
