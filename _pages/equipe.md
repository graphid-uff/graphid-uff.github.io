---
layout: page
title: Equipe
title_en: Team
permalink: /equipe/
description: Membros do GRAPHID
description_en: GRAPHID members
nav: true
nav_order: 5
horizontal: false
_styles: >
  .card-body .card-title,
  .card-body .card-text,
  .team-email {
    font-size: 0.85rem;
    font-weight: normal;
    color: var(--global-text-color-light);
  }
  .team-email {
    text-align: left;
    margin: 0.5rem 0 0;
  }
---

  {% assign team = site.data.team | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for member in team %}
      <div class="col mb-4" id="{{ member.name | slugify }}">
        <div class="card h-100">
          {% if member.img %}
          <img src="{{ member.img | relative_url }}" class="card-img-top team-photo" alt="{{ member.name }}" style="object-position: {{ member.img_position | default: 'center' }};">
          {% endif %}

          <div class="card-body">
            <h5 class="card-title">{{ member.name }}</h5>
            {% if member.role %}
              <p class="card-text">{{ member.role }}</p>
            {% endif %}
            {% if member.institution %}
              <p class="card-text">{{ member.institution }}</p>
            {% endif %}
            {% if member.keywords %}
              <p class="card-text">
                {% for keyword in member.keywords %}
                  <span class="badge badge-pill bg-secondary">{{ keyword }}</span>
                {% endfor %}
              </p>
            {% endif %}
            {% if member.email %}
              <p class="team-email">Email(s): {{ member.email }}</p>
            {% endif %}
          </div>

          <div class="card-footer">
            {% if member.lattes %}
              <a href="{{ member.lattes }}" class="card-link" target="_blank">Lattes</a>
            {% endif %}
            {% if member.orcid %}
              <a href="{{ member.orcid }}" class="card-link" target="_blank">ORCID</a>
            {% endif %}
            {% if member.scholar %}
              <a href="{{ member.scholar }}" class="card-link" target="_blank">Scholar</a>
            {% endif %}
            {% if member.researchgate %}
              <a href="{{ member.researchgate }}" class="card-link" target="_blank">ResearchGate</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
