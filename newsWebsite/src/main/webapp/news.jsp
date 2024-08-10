<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="includes/header-default.jsp" %>
<%@ include file="includes/navbar-logged-in.jsp" %>
<%@ taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<main class="container">
    <div>
        <img class="img-news rounded mb-3" src="assets/trump.jpeg" alt="imgnot">
    </div>

    <article class="blog-post p-4 p-md-5 mb-4 rounded bg-light shadow-sm">
        <div class="blog-post-header mb-3">
            <h2 class="display-4 link-body-emphasis mb-1">${news.title}</h2>
            <p class="blog-post-meta text-muted">${news.publishDate} <a class="text-decoration-none">${news.author}</a></p>
        </div>
        <div class="blog-post-body">
            <p class="lead my-3">${news.text}</p>
            <p class="lead my-3 text-muted">${news.source}</p>
        </div>
    </article>

    <h3 class="display-6 link-body-emphasis mb-2 mt-4">Comentários</h3>
    <div class="form-comment">
        <textarea class="form-control" placeholder="Comente aqui" id="floatingTextarea2" style="height: 100px"></textarea>
        <button type="submit" class="btn btn-outline-primary">Enviar</button>
    </div>

    <c:if test="${not empty listCommentary}">
        <c:forEach var="commentary" items="${listCommentary}">
            <p><strong>${commentary.user.username}</strong></p>
            <p>${commentary.text}</p>
            <hr>
        </c:forEach>
    </c:if>
    <c:if test="${empty listCommentary}">
        <p>Sem comentários.</p>
    </c:if>
</main>

<%@ include file="includes/footer.jsp" %>
<%@ include file="includes/footer-default.jsp" %>