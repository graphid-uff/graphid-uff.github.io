---
layout: page
title: Equipe
permalink: /equipe/
description: Membros do GRAPHID
nav: true
nav_order: 5
horizontal: false
---

  {% assign team = site.data.team | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for member in team %}
      <div class="col mb-4">
        <div class="card h-100">
          {% if member.img %}
          <img src="{{ member.img | relative_url }}" class="card-img-top team-photo" alt="{{ member.name }}">
          {% endif %}

          <div class="card-body">
            <h5 class="card-title">{{ member.name }}</h5>
            {% if member.role %}
              <p class="card-text"><strong>{{ member.role }}</strong></p>
            {% endif %}
            {% if member.institution %}
              <p class="card-text">{{ member.institution }}</p>
            {% endif %}
          </div>

          <div class="card-footer">
            {% if member.email %}
              <a href="mailto:{{ member.email }}" class="card-link">E-mail</a>
            {% endif %}
            {% if member.lattes %}
              <a href="{{ member.lattes }}" class="card-link" target="_blank">Lattes</a>
            {% endif %}
            {% if member.scholar %}
              <a href="{{ member.scholar }}" class="card-link" target="_blank">Scholar</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
