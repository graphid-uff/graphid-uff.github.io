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
    {% assign year_id = group.name | slugify %}
    <h2 class="bibliography">
      <button
        class="year-toggle-btn"
        type="button"
        data-toggle="collapse"
        data-target="#year-{{ year_id }}"
        aria-expanded="true"
        aria-controls="year-{{ year_id }}"
      >
        <i class="fa-solid fa-chevron-down year-toggle-icon"></i>
        {{ group.name }}
        <span class="year-count">({{ group.items | size }})</span>
      </button>
    </h2>
    <div id="year-{{ year_id }}" class="publication-list collapse show">
      {% for livro in group.items %}
        {% include livros.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
