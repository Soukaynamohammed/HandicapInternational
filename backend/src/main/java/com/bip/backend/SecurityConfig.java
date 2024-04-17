package com.bip.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import com.auth0.spring.security.api.JwtWebSecurityConfigurer;

@EnableWebSecurity
public class SecurityConfig {

    @Value(value = "${auth0.apiAudience}")
    private String apiAudience;
    @Value(value = "${auth0.issuer}")
    private String issuer;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // Apply JWT configuration with Auth0
        JwtWebSecurityConfigurer
                .forRS256(apiAudience, issuer) // Ensure these are defined or injected
                .configure(http)
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/api/public").permitAll()
                        .requestMatchers("/api/private").authenticated()
                        .requestMatchers("/api/private-scoped").hasAuthority("read:messages")
                );

        return http.build();
    }
}
