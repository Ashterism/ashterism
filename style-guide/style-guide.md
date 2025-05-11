layout: page

title: style-guide

permalink: /style-guide/

# Style Guide

## Image Cards

### Standard Image Card

**Example:**

<div class="image-card-wrapper">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Example image">
        <figcaption>Standard image card with caption</figcaption>
    </figure>
</div>

**Usage:**

The Standard Image Card is styled using the `.image-card-wrapper` and `.media-card` classes. It inherits the size of the image it contains, meaning a 600px wide image will be displayed as 600px wide.

**Key Attributes:**

* Max width: `100%`
* Border radius: `8px`
* Box shadow: `0 4px 20px rgba(0, 0, 0, 0.15)`
* Transition on hover: `scale(1.02)`

### Centered Image Card

**Example:**

<div class="image-card-wrapper center">
    <figure class="media-card">
        <img src="/assets/images/25_03/138A3531.jpg" alt="Centered example image">
        <figcaption>Centered image card</figcaption>
    </figure>
</div>

**Usage:**

Centered using the `.center` class. Same attributes as the standard card, but centered horizontally.

### Right-Aligned Image Card

**Example:**

<div class="image-card-wrapper right">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit.png" alt="Right-aligned image card">
        <figcaption>Right-aligned image card</figcaption>
    </figure>
</div>

**Usage:**

Right-aligned using the `.right` class. Floats to the right on larger screens, centered on smaller screens.

## Full-Width Image

**Example:**

<figure>
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Full-width image example">
    <figcaption>Full-width image example</figcaption>
</figure>

**Usage:**

No wrapper needed. Takes up 100% of the parent container width.

## Image Grid

**Example:**

<div class="image-grid">
  <figure>
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Image 1</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Image 2</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Image 3</figcaption>
  </figure>
</div>

**Usage:**

A flexible grid layout that automatically adjusts to the number of images. To use it, wrap your image and `figcaption` elements within a `div` with the class `.image-grid`. The grid will automatically arrange the images.

## Photo Grid (2x3)

**Example:**

<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Example image 1</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Example image 2</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Example image 3</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3450.jpg" alt="Example image 4">
    <figcaption>Example image 4</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 5">
    <figcaption>Example image 5</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 6">
    <figcaption>Example image 6</figcaption>
  </figure>
</div>

**Usage:**

This creates a 2x3 grid layout for photos. To implement it, wrap six `figure` elements (each containing an `img` and an optional `figcaption`) within a `div` with the class `.photo-grid`. Each `figure` within this grid should also have the class `.media-card` to inherit the image card styling. The grid is responsive and will adjust on smaller screens.

## Video Example

**Example:**

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
</div>

**Usage:**

Responsive video wrapper, maintaining aspect ratio.

## Notes and Tips

> [!NOTE]
> This is a note.

**Usage:**

Admonition block for notes.

> [!TIP]
> This is a tip.

**Usage:**

Admonition block for tips.
